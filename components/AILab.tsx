
import React, { useState, useRef } from 'react';
import { X, Search, Sparkles, Image as ImageIcon, BrainCircuit, Upload, Loader2, Link as LinkIcon } from 'lucide-react';
import { searchMushroomInfo, generateMushroomImage, editMushroomImage, deepResearch } from '../services/geminiService';

interface AILabProps {
    isOpen: boolean;
    onClose: () => void;
}

type Tab = 'search' | 'generate' | 'edit' | 'think';

const AILab: React.FC<AILabProps> = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState<Tab>('search');
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [sources, setSources] = useState<any[]>([]);
    const [generatedImage, setGenerateImage] = useState<string | null>(null);
    const [uploadedImage, setUploadImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Reset state when switching tabs
    const handleTabChange = (tab: Tab) => {
        setActiveTab(tab);
        setQuery('');
        setResult(null);
        setSources([]);
        setGenerateImage(null);
        // Don't reset uploaded image immediately in case they switch back
    };

    const handleSearch = async () => {
        if (!query.trim()) return;
        setIsLoading(true);
        setResult(null);
        setSources([]);
        
        const data = await searchMushroomInfo(query);
        setResult(data.text);
        setSources(data.sources || []);
        setIsLoading(false);
    };

    const handleGenerate = async () => {
        if (!query.trim()) return;
        setIsLoading(true);
        setGenerateImage(null);

        try {
            const base64 = await generateMushroomImage(query, "1K");
            setGenerateImage(base64);
        } catch (e) {
            setResult("Failed to generate image.");
        }
        setIsLoading(false);
    };

    const handleEdit = async () => {
        if (!query.trim() || !uploadedImage) return;
        setIsLoading(true);
        setGenerateImage(null);

        try {
             // Remove data URL prefix for API
             const base64Data = uploadedImage.split(',')[1];
             const resultImage = await editMushroomImage(base64Data, query);
             setGenerateImage(resultImage);
        } catch (e) {
            setResult("Failed to edit image.");
        }
        setIsLoading(false);
    };

    const handleThink = async () => {
        if (!query.trim()) return;
        setIsLoading(true);
        setResult(null);
        
        const text = await deepResearch(query);
        setResult(text);
        setIsLoading(false);
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-mushroom-950/60 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-300">
                
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-mushroom-50 to-white">
                    <div className="flex items-center gap-3">
                        <div className="bg-mushroom-800 text-white p-2 rounded-lg">
                            <Sparkles size={24} />
                        </div>
                        <div>
                            <h2 className="text-xl font-serif font-bold text-mushroom-950">Mushroom Intelligence</h2>
                            <p className="text-xs text-mushroom-600 font-medium uppercase tracking-wider">Powered by Gemini 2.5 & 3.0</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-100 bg-gray-50/50">
                    <button 
                        onClick={() => handleTabChange('search')}
                        className={`flex-1 py-4 px-2 text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-all ${activeTab === 'search' ? 'border-mushroom-800 text-mushroom-800 bg-white' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        <Search size={16} /> Search Grounding
                    </button>
                    <button 
                        onClick={() => handleTabChange('generate')}
                        className={`flex-1 py-4 px-2 text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-all ${activeTab === 'generate' ? 'border-mushroom-800 text-mushroom-800 bg-white' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        <ImageIcon size={16} /> Gen Image
                    </button>
                    <button 
                        onClick={() => handleTabChange('edit')}
                        className={`flex-1 py-4 px-2 text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-all ${activeTab === 'edit' ? 'border-mushroom-800 text-mushroom-800 bg-white' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        <Sparkles size={16} /> Edit Image
                    </button>
                    <button 
                        onClick={() => handleTabChange('think')}
                        className={`flex-1 py-4 px-2 text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-all ${activeTab === 'think' ? 'border-mushroom-800 text-mushroom-800 bg-white' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        <BrainCircuit size={16} /> Deep Think
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 bg-gray-50/30">
                    
                    {/* Search Tab */}
                    {activeTab === 'search' && (
                        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
                            <label className="text-sm font-semibold text-gray-700">Ask any question about medicinal mushrooms, benefits, or science.</label>
                            <div className="flex gap-2">
                                <input 
                                    type="text" 
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="e.g., What are the benefits of Turkey Tail?"
                                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mushroom-500 focus:border-transparent outline-none"
                                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                />
                                <button 
                                    onClick={handleSearch}
                                    disabled={isLoading}
                                    className="bg-mushroom-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-mushroom-700 disabled:opacity-50 transition-colors"
                                >
                                    {isLoading ? <Loader2 className="animate-spin" /> : 'Ask'}
                                </button>
                            </div>
                            {result && (
                                <div className="mt-4 bg-white p-6 rounded-xl border border-gray-100 shadow-sm animate-in fade-in slide-in-from-bottom-2">
                                    <div className="prose prose-mushroom max-w-none text-gray-800 leading-relaxed whitespace-pre-wrap">
                                        {result}
                                    </div>
                                    {sources.length > 0 && (
                                        <div className="mt-6 pt-4 border-t border-gray-100">
                                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Sources</h4>
                                            <div className="grid gap-2">
                                                {sources.map((source, idx) => (
                                                    source.web?.uri && (
                                                        <a key={idx} href={source.web.uri} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-mushroom-600 hover:text-mushroom-800 hover:underline">
                                                            <LinkIcon size={12} />
                                                            {source.web.title}
                                                        </a>
                                                    )
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Generate Image Tab */}
                    {activeTab === 'generate' && (
                        <div className="flex flex-col gap-4 max-w-2xl mx-auto h-full">
                             <label className="text-sm font-semibold text-gray-700">Describe the mushroom art you want to create (Nano Banana Pro).</label>
                             <div className="flex gap-2">
                                <input 
                                    type="text" 
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="e.g., A cinematic shot of a glowing blue mushroom in a rain forest"
                                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mushroom-500 outline-none"
                                    onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                                />
                                <button 
                                    onClick={handleGenerate}
                                    disabled={isLoading}
                                    className="bg-mushroom-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-mushroom-700 disabled:opacity-50 transition-colors"
                                >
                                    {isLoading ? <Loader2 className="animate-spin" /> : 'Generate'}
                                </button>
                            </div>
                            <div className="flex-1 min-h-[300px] bg-white border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center relative overflow-hidden">
                                {isLoading && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 z-10">
                                        <Loader2 className="animate-spin text-mushroom-600 w-10 h-10 mb-2" />
                                        <p className="text-sm font-medium text-gray-500">Creating your masterpiece...</p>
                                    </div>
                                )}
                                {generatedImage ? (
                                    <img src={generatedImage} alt="Generated" className="max-w-full max-h-full object-contain shadow-lg" />
                                ) : (
                                    <div className="text-center text-gray-400">
                                        <ImageIcon size={48} className="mx-auto mb-2 opacity-50" />
                                        <p>Image will appear here</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Edit Image Tab */}
                    {activeTab === 'edit' && (
                         <div className="flex flex-col gap-4 max-w-2xl mx-auto h-full">
                            <div className="grid grid-cols-2 gap-4 h-full">
                                {/* Upload Area */}
                                <div className="col-span-2 md:col-span-1">
                                    <div 
                                        className="h-48 md:h-64 bg-white border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors relative"
                                        onClick={() => fileInputRef.current?.click()}
                                    >
                                        {uploadedImage ? (
                                            <img src={uploadedImage} alt="Upload" className="w-full h-full object-cover rounded-xl" />
                                        ) : (
                                            <>
                                                <Upload size={32} className="text-gray-400 mb-2" />
                                                <p className="text-sm text-gray-500 font-medium">Click to upload image</p>
                                            </>
                                        )}
                                        <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileUpload} />
                                    </div>
                                </div>
                                
                                {/* Result Area */}
                                <div className="col-span-2 md:col-span-1">
                                    <div className="h-48 md:h-64 bg-white border border-gray-200 rounded-xl flex items-center justify-center relative overflow-hidden">
                                        {isLoading && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
                                                <Loader2 className="animate-spin text-mushroom-600" />
                                            </div>
                                        )}
                                        {generatedImage ? (
                                            <img src={generatedImage} alt="Edited" className="w-full h-full object-cover rounded-xl" />
                                        ) : (
                                            <p className="text-sm text-gray-400">Edited image result</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <label className="text-sm font-semibold text-gray-700">Instructions (Nano Banana)</label>
                            <div className="flex gap-2">
                                <input 
                                    type="text" 
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="e.g., Add a retro filter, remove background..."
                                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mushroom-500 outline-none"
                                />
                                <button 
                                    onClick={handleEdit}
                                    disabled={isLoading || !uploadedImage}
                                    className="bg-mushroom-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-mushroom-700 disabled:opacity-50 transition-colors"
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Think Tab */}
                    {activeTab === 'think' && (
                        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
                            <label className="text-sm font-semibold text-gray-700">Deep Research Mode (Gemini 3 Pro + Thinking)</label>
                            <p className="text-xs text-gray-500">Ask complex scientific questions. The model will take time to "think" before answering.</p>
                            <div className="flex gap-2">
                                <textarea 
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="e.g., Analyze the chemical composition of Chaga vs Reishi regarding beta-glucans and triterpenes..."
                                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mushroom-500 outline-none h-24 resize-none"
                                />
                            </div>
                             <button 
                                onClick={handleThink}
                                disabled={isLoading}
                                className="bg-earth-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 disabled:opacity-50 transition-colors w-full flex items-center justify-center gap-2"
                            >
                                {isLoading ? <><Loader2 className="animate-spin" /> Thinking...</> : 'Start Deep Analysis'}
                            </button>

                            {result && (
                                <div className="mt-4 bg-white p-8 rounded-xl border border-gray-100 shadow-sm animate-in fade-in slide-in-from-bottom-2">
                                    <div className="prose prose-mushroom max-w-none text-gray-800 leading-relaxed whitespace-pre-wrap font-serif">
                                        {result}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AILab;
