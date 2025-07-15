export default function Footer() {
  return (
<footer className="border-t border-[#5d725d] bg-[#001D2D] text-white py-4">
  <div className="container">
    <div className="max-w-7xl mx-auto px-4 text-sm font-secondary">
      <div className="flex flex-col md:flex-row items-center md:items-center justify-between space-y-4 md:space-y-0 w-full">
        
        {/* Left navigation */}
        <div className="flex space-x-6 text-base md:w-1/3 justify-start">
          <a href="#" className="hover:none">Home</a>
          <a href="#" className="hover:none">About</a>
          <a href="#" className="hover:none">Services</a>
        </div>

        {/* Centered right content */}
        <div className="flex space-x-4 text-xs text-[#4D6C7C] justify-center md:w-1/3">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <span className="hidden md:inline border-l border-[#4D6C7C] h-4"></span>
          <a href="#" className="hover:text-white">Terms of services</a>
        </div>

        {/* Empty right space to balance layout */}
        <div className="hidden md:block md:w-1/3" />

      </div>
    </div>
  </div>
</footer>




  )
}
