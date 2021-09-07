import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p className="cursor-pointer hover:underline text-sm">
          How Airbnb works
        </p>
        <p className="cursor-pointer hover:underline text-sm">Newsroom</p>
        <p className="cursor-pointer hover:underline text-sm">Airbnb 2021</p>
        <p className="cursor-pointer hover:underline text-sm">Investors</p>
        <p className="cursor-pointer hover:underline text-sm">Airbnb Plus</p>
        <p className="cursor-pointer hover:underline text-sm">Airbnb Luxe</p>
        <p className="cursor-pointer hover:underline text-sm">HotelTonight</p>
        <p className="cursor-pointer hover:underline text-sm">
          Airbnb for Work
        </p>
        <p className="cursor-pointer hover:underline text-sm">
          Made possible by Hosts
        </p>
        <p className="cursor-pointer hover:underline text-sm">Careers</p>
        <p className="cursor-pointer hover:underline text-sm">
          Founders' Letter
        </p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p className="cursor-pointer hover:underline text-sm">
          Diversity & Belonging
        </p>
        <p className="cursor-pointer hover:underline text-sm">Accessibility</p>
        <p className="cursor-pointer hover:underline text-sm">
          Airbnb Associates
        </p>
        <p className="cursor-pointer hover:underline text-sm">
          Host Afghan refugees
        </p>
        <p className="cursor-pointer hover:underline text-sm">
          Guest Referrals
        </p>
        <p className="cursor-pointer hover:underline text-sm">Airbnb.org</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p className="cursor-pointer hover:underline text-sm">Host your home</p>
        <p className="cursor-pointer hover:underline text-sm">
          Host an Online Experience
        </p>
        <p className="cursor-pointer hover:underline text-sm">
          Host an Experience
        </p>
        <p className="cursor-pointer hover:underline text-sm">
          Responsible hosting
        </p>
        <p className="cursor-pointer hover:underline text-sm">
          Resource Centre
        </p>
        <p className="cursor-pointer hover:underline text-sm">
          Community Centre
        </p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p className="cursor-pointer hover:underline text-sm">
          Our COVID-19 Response
        </p>
        <p className="cursor-pointer hover:underline text-sm">Help Centre</p>
        <p className="cursor-pointer hover:underline text-sm">
          Cancellation options
        </p>
        <p className="cursor-pointer hover:underline text-sm">
          Neighborhood Support
        </p>
        <p className="cursor-pointer hover:underline text-sm">Trust & Safety</p>
      </div>

      <div></div>
    </div>
  );
}

export default Footer;
