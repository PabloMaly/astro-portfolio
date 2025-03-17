import type { FC } from 'react';
import { useState } from 'react';

interface MailButtonProps {
    email: string;
}

export const MailButton: FC<MailButtonProps> = ({ email }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        console.log(email);
        try {
            await navigator.clipboard.writeText(email);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all text-sm cursor-pointer relative overflow-hidden active:scale-95">
            <svg
                className="w-5 h-5 md:w-6 md:h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-label="Email icon">
                <title>Email icon</title>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <span className="hidden sm:inline-block copy-text transition-all duration-200">
                {isCopied ? 'Copied!' : email}
            </span>
            <div className="relative w-4 h-4">
                <svg
                    role="img"
                    aria-hidden="true"
                    className={`w-4 h-4 copy-icon absolute transition-all duration-200 ${isCopied ? 'opacity-0' : 'opacity-100'}`}
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                </svg>
                <svg
                    role="img"
                    aria-hidden="true"
                    className={`w-4 h-4 text-[#0066ff] absolute tick-icon transition-all duration-200 ${isCopied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </button>
    )
}

export default MailButton;