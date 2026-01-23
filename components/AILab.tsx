import React, { useState, useRef, useEffect } from 'react';
import { X, Sparkles, Search, Image as ImageIcon, Edit, Loader2, Send } from 'lucide-react';
import gsap from 'gsap';
import { searchMushroomInfo, generateMushroomImage, editMushroomImage, deepResearch } from '../services/geminiService';

interface AILabProps {
    isOpen: boolean;
    onClose: () => void;
}

type Mode = 'search' | 'image' | 'edit';

const AILab: React.FC<AILabProps> = ({ isOpen, onClose }) => {
    const [mode, setMode] = useState<Mode>('search');
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<any>(null);
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [imageToEdit, setImageToEdit] = useState<string | null>(null);

    const modalRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(modalRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.3 }
            );
            gsap.fromTo(contentRef.current,
                { y: 50, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.5)', delay: 0.1 }
            );
        }
    }, [isOpen]);

    const handleClose = () => {
        gsap.to(contentRef.current, { y: 50, opacity: 0, scale: 0.95, duration: 0.3 });
        gsap.to(modalRef.current, {
            opacity: 0, duration: 0.3, onComplete: () => {
                onClose();
                setResult(null);
                setGeneratedImage(null);
                setQuery('');
            }
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

        setIsLoading(true);
        setResult(null);
        setGeneratedImage(null);

        try {
            if (mode === 'search') {
                const data = await searchMushroomInfo(query);
                setResult(data);
            } else if (mode === 'image') {
                const image = await generateMushroomImage(query);
                setGeneratedImage(image);
            } else if (mode === 'edit' && imageToEdit) {
                 const edited = await editMushroomImage(imageToEdit, query);
                 // Simplified for demo - in reality would get a new image back
                 setResult({ text: "Image editing instructions processed. (Visual output requires backend implementation)"});
            }
        } catch (error) {
            console.error("AI Error:", error);
            setResult({ text: "An error occurred. Please try again." });
        } finally {
            setIsLoading(false);
        }
    };

     const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageToEdit(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    if (!isOpen) return null;

    return (
        <div ref={modalRef} className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleClose}></div>
            <div ref={contentRef} className="relative bg-greenlays-primary w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-white/10">
                
                {/* Header */}
                <div className="bg-[#2A352B] p-6 flex justify-between items-center border-b border-white/10">
                    <div className="flex items-center gap-3">
                         <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-greenlays-lime opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-greenlays-lime"></span>
                        </span>
                        <h2 className="text-2xl font-serif font-bold text-white">Mushroom AI Lab</h2>
                    </div>
                    <button onClick={handleClose} className="text-gray-400 hover:text-white transition-colors p-1">
                        <X size={24} />
                    </button>
                </div>

                {/* Mode Selection */}
                <div className="flex border-b border-white/10">
                    <button onClick={() => setMode('search')} className={`flex-1 p-4 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${mode === 'search' ? 'bg-greenlays-button text-white' : 'text-gray-400 hover:bg-[#2A352B] hover:text-white'}`}>
                        <Search size={18} /> Research
                    </button>
                    <button onClick={() => setMode('image')} className={`flex-1 p-4 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${mode === 'image' ? 'bg-greenlays-button text-white' : 'text-gray-400 hover:bg-[#2A352B] hover:text-white'}`}>
                        <ImageIcon size={18} /> Generate
                    </button>
                    <button onClick={() => setMode('edit')} className={`flex-1 p-4 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${mode === 'edit' ? 'bg-greenlays-button text-white' : 'text-gray-400 hover:bg-[#2A352B] hover:text-white'}`}>
                        <Edit size={18} /> Edit
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                     {mode === 'edit' && !imageToEdit && (
                        <div className="mb-6 border-2 border-dashed border-white/20 rounded-xl p-8 text-center">
                            <ImageIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                            <label htmlFor="image-upload" className="cursor-pointer">
                                <span className="bg-greenlays-button text-white px-6 py-3 rounded-md font-bold uppercase tracking-wider shadow-md hover:bg-greenlays-button-hover hover:shadow-lg transition-all duration-300 inline-block">
                                    Upload Mushroom Image
                                </span>
                                <input id="image-upload" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                            </label>
                             <p className="text-gray-400 text-sm mt-2">PNG, JPG up to 5MB</p>
                        </div>
                    )}

                    {mode === 'edit' && imageToEdit && (
                         <div className="mb-6 relative rounded-xl overflow-hidden max-h-64">
                            <img src={imageToEdit} alt="To edit" className="w-full h-full object-cover opacity-70" />
                             <button onClick={() => setImageToEdit(null)} className="absolute top-2 right-2 bg-black/60 text-white p-1 rounded-full hover:bg-black/80">
                                <X size={16} />
                             </button>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="relative">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder={
                                mode === 'search' ? "Ask about mushroom benefits, dosage, history..." :
                                mode === 'image' ? "Describe the mushroom image you want to see..." :
                                "Describe how to edit your image (e.g., 'make it glow')..."
                            }
                            className="w-full bg-[#2A352B] text-white placeholder-gray-500 rounded-xl pl-6 pr-32 py-4 focus:outline-none focus:ring-2 focus:ring-greenlays-lime/50 border border-white/10"
                            disabled={isLoading}
                        />
                        
                        {/* NEW BUTTON STYLE APPLIED HERE */}
                        <button type="submit" disabled={isLoading || !query.trim() || (mode === 'edit' && !imageToEdit)} className="absolute right-2 top-2 bottom-2 bg-greenlays-button text-white px-6 rounded-lg font-bold uppercase tracking-wider shadow-md hover:bg-greenlays-button-hover hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
                            {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                        </button>
                    </form>

                    {/* Results Area */}
                    <div className="mt-8 min-h-[200px] max-h-[400px] overflow-y-auto no-scrollbar rounded-xl bg-[#2A352B]/50 p-6 border border-white/5">
                        {isLoading && (
                            <div className="flex flex-col items-center justify-center h-full text-greenlays-lime">
                                <Sparkles className="animate-pulse mb-4" size={32} />
                                <p className="font-medium animate-pulse">Mycelium network is processing...</p>
                            </div>
                        )}

                        {!isLoading && result && (
                            <div className="prose prose-invert max-w-none">
                                <p className="text-gray-200 leading-relaxed whitespace-pre-line">{result.text}</p>
                                {result.sources && result.sources.length > 0 && (
                                    <div className="mt-4 pt-4 border-t border-white/10">
                                        <h4 className="text-sm font-bold text-greenlays-lime uppercase mb-2">Sources:</h4>
                                        <ul className="text-xs text-gray-400 space-y-1">
                                            {result.sources.map((source: any, index: number) => (
                                                <li key={index}>{source.web.title}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}

                        {!isLoading && generatedImage && (
                            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
                                <img src={generatedImage} alt="AI Generated" className="w-full h-auto" />
                            </div>
                        )}
                        
                        {!isLoading && !result && !generatedImage && (
                             <div className="flex flex-col items-center justify-center h-full text-gray-500">
                                <Sparkles className="mb-4 opacity-50" size={32} />
                                <p>Results will appear here.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AILab;
