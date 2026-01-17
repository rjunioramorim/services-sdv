const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo-bg.png" 
        alt="Sementes do ventre" 
        className="h-12 md:h-14 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
