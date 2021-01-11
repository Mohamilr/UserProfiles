import React from "react";
// import ''
const ModalData = ({ profile }) => {
  let first;
  let second;
  let third;
  let fourth;

  if (profile.CreditCardNumber) {
    const card = profile.CreditCardNumber.split("");
    const cardArr = card.slice(0, 4);
    first = cardArr.join("");

    const cardArr2 = card.slice(4, 8);
    second = cardArr2.join("");

    const cardArr3 = card.slice(8, 12);
    third = cardArr3.join("");

    const cardArr4 = card.slice(12, 16);
    fourth = cardArr4.join("");
  }

  return (
    <div>
      <div
        className="m-auto w-1/2 h-auto rounded-lg text-white p-4 mb-4"
        style={{ backgroundColor: "#373a4b" }}
      >
        {profile.CreditCardType === 'MasterCard' ? (
          <img src="https://res.cloudinary.com/project-s/image/upload/v1610396196/mastercard_m0ijpe.png" alt="mastercard" className="w-12" />
        ): profile.CreditCardType === 'Visa' ? (
          <img src="https://res.cloudinary.com/project-s/image/upload/v1610396196/visa_logo_ijnmof.webp" alt="visa" className="w-12" />
        ): profile.CreditCardType === 'PayPal' ? (
          <img src="https://res.cloudinary.com/project-s/image/upload/v1610396196/paypal_logo_ig2inr.jpg" alt="paypal" className="w-12" />
        ): (
         <p className="w-12">{profile.CreditCardType}</p>
        )}
        <p className="py-3">{`${first} ${second} ${third} ${fourth}`}</p>
        <p className="font-light text-sm opacity-50">Card holder</p>
        <p className="text-sm">{`${profile.FirstName} ${profile.LastName}`}</p>
      </div>
      <div className="divide-y-4 divide-solid divide-gray-10">
        <div className="flex justify-between py-2">
          <span className="text-sm font-bold">Email: </span>
          <p className="break-words">{profile.Email}</p>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-sm font-bold">Gender: </span>
          <p className="break-words">{profile.Gender}</p>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-sm font-bold">User Name: </span>
          <p className="break-words">{profile.UserName}</p>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-sm font-bold">Phone Number: </span>
          <p className="break-words">{profile.PhoneNumber}</p>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-sm font-bold">Payment Method: </span>
          <p className="break-words">{profile.PaymentMethod}</p>
        </div>

        <div className="flex justify-between py-2">
          <span className="text-sm font-bold">Last Login: </span>
          <p className="break-words">{profile.LastLogin}</p>
        </div>

        <div className="flex justify-between py-2">
          <span className="text-sm font-bold">Domain Name: </span>
          <p className="break-words">{profile.DomainName}</p>
        </div>

        <div className="flex justify-between py-2">
          <span className="text-sm font-bold">URL: </span>
          <p className="break-words pl-2">{profile.URL}</p>
        </div>

        <div className="flex justify-between py-2">
          <span className="text-sm font-bold">Latitude: </span>
          <p className="break-words">{profile.Latitude}</p>
        </div>

        <div className="flex justify-between py-2">
          <span className="text-sm font-bold">Longitude: </span>
          <p className="break-words">{profile.Longitude}</p>
        </div>

        <div className="flex justify-between py-2">
          <span className="text-sm font-bold">Mac Address: </span>
          <p className="break-words">{profile.MacAddress}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalData;
