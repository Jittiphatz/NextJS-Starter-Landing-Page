const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8 text-center">
            <div className="container mx-auto px-6 md:px-12">
                <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved..</p>
                <div className="flex justify-center mt-2 space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
                    <a href="https://github.com/Jittiphatz" className="text-gray-400 hover:text-white">GitHub</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;