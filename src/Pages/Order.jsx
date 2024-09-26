import { useState } from "react";
import { useEffect } from "react";
import "../styles/Order.css"
import qrcode from "qrcode-generator"
import { AppBarFunctionalityOrder } from "../Util/AppBarForOrder";

export default function OrderPageNew() {
  const [profileLink, setProfileLink] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [postPrice, setPostPrice] = useState("");
  const [utr , setUtr] = useState("");

  const telegramMessage = `
    Profile Link: ${profileLink}
    Username: ${username}
    Email: ${email}
    Phone Number: ${phoneNumber}
    UTR or Transaction ID: ${utr}
    Platform: ${selectedPlatform}
    Price: ₹${postPrice}
`

  const UpiPayment = (totalPrice) => {
    setPostPrice(totalPrice)
    const upiId = "rajkamaliit@axl"; // Specific UPI ID

    
      // Construct the UPI URL
      const upiUrl = `upi://pay?pa=${upiId}&am=${Number(totalPrice).toFixed(
        2
      )}&pn=Promotionia_AdCampaign`;

      // Generate the QR code image
      const qr = qrcode(0, "M");
      qr.addData(upiUrl);
      qr.make();

      // Display the QR code image in the div element
      const qrCodeDiv = document.getElementById("qrcode");
      qrCodeDiv.innerHTML = qr.createImgTag(7); // Set the QR code image in the div

      // Update the href attribute of each link with the dynamically calculated amount
      const googlePayLink = document.getElementById("googlePay");
      const phonePeLink = document.getElementById("phonePe");
      const paytmLink = document.getElementById("paytm");

      if (googlePayLink && phonePeLink && paytmLink) {
        googlePayLink.href = upiUrl;
        phonePeLink.href = upiUrl;
        paytmLink.href = upiUrl;
      }
    }

    function HandlePaymentFormSubmission(event) {
      event.preventDefault();
      const telegramBotToken = "6204724735:AAEFgjWXvxRvchtNACTD5vW4fSZDE6YkLhs";
      const telegramChatId = "2077656044";
      const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${telegramChatId}&text=${encodeURIComponent(
        telegramMessage
      )}`;

      fetch(telegramUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.ok) {
            alert("Order successfully placed!");
          } else {
            alert("Error placing the order. Please try again.");
          }
        })
        .catch((error) => {
          alert("Error connecting to Telegram API. Please check your network.");
          console.error(error);
        });
    }
    return (
      <>
      <AppBarFunctionalityOrder tab1="About Team" route1="/About-Us" tab2="About Promotionia" route2 = "/Vision" />
      <div className="order-form-container">
        <form
          id="adOrderForm"
          method="post"
          onSubmit={HandlePaymentFormSubmission}
          encType="multipart/form-data"
        >
          <label htmlFor="profileLink">Profile Link:</label>
          <input
            type="text"
            id="profileLink"
            name="profileLink"
            placeholder="Enter your Profile Link"
            value={profileLink}
            onChange={(e) => setProfileLink(e.target.value)}
            required
          />

          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your Phone Number"
            value={phoneNumber}
            onChange={() => setPhoneNumber(e.target.value)}
            required
          />

          <div className="platform-selection">
            <label>Select Platform:</label>
            <div className="radio-group">
              <input
                type="radio"
                id="instagram"
                name="platform"
                value="instagram"
                onChange={(e) => setSelectedPlatform(e.target.value)}
              />
              <label htmlFor="instagram">Instagram</label>
            </div>
            <div className="radio-group">
              <input
                type="radio"
                id="facebook"
                name="platform"
                value="facebook"
                disabled = {true}
              />
              <label htmlFor="facebook">{"Facebook (Coming Soon)"}</label>
            </div>
            <div className="radio-group">
              <input
                type="radio"
                id="twitter"
                name="platform"
                value="twitter"
                disabled = {true}
              />
              <label htmlFor="twitter">{"Twitter (Coming Soon)"}</label>
            </div>
          </div>

          <div id="additionalOptions" className="price-list">
            {selectedPlatform === "instagram" && (
              <>
                <h3>Pricing Options:</h3>
                <div className="price-list">
                  <div className="price-card">
                    <input
                      type="radio"
                      id="support100_1month"
                      name="postPricing"
                      value="499"
                      onChange={(e) => UpiPayment(e.target.value)}
                    />
                    <label htmlFor="support100_1month">
                      100+ People Support - 1 Month: ₹499
                    </label>
                  </div>
                  <div className="price-card">
                    <input
                      type="radio"
                      id="support100_2months"
                      name="postPricing"
                      value="949"
                      onChange={(e) =>  UpiPayment(e.target.value)}
                    />
                    <label htmlFor="support100_2months">
                      100+ People Support - 2 Months: ₹949
                    </label>
                  </div>
                  <div className="price-card">
                    <input
                      type="radio"
                      id="support100_3months"
                      name="postPricing"
                      value="1399"
                      onChange={(e) =>  UpiPayment(e.target.value)}
                    />
                    <label htmlFor="support100_3months">
                      100+ People Support - 3 Months: ₹1399
                    </label>
                  </div>
                  <div className="price-card">
                    <input
                      type="radio"
                      id="support200_1month"
                      name="postPricing"
                      value="799"
                      onChange={(e) =>  UpiPayment(e.target.value)}
                    />
                    <label htmlFor="support200_1month">
                      200+ People Support - 1 Month: ₹799
                    </label>
                  </div>
                  <div className="price-card">
                    <input
                      type="radio"
                      id="support200_2months"
                      name="postPricing"
                      value="1299"
                      onChange={(e) =>  UpiPayment(e.target.value)}
                    />
                    <label htmlFor="support200_2months">
                      200+ People Support - 2 Months: ₹1299
                    </label>
                  </div>
                  <div className="price-card">
                    <input
                      type="radio"
                      id="support200_3months"
                      name="postPricing"
                      value="1759"
                      onChange={(e) =>  UpiPayment(e.target.value)}
                    />
                    <label htmlFor="support200_3months">
                      200+ People Support - 3 Months: ₹1759
                    </label>
                  </div>
                  <div className="price-card">
                    <input
                      type="radio"
                      id="support300_1month"
                      name="postPricing"
                      value="1199"
                      onChange={(e) =>  UpiPayment(e.target.value)}
                    />
                    <label htmlFor="support300_1month">
                      300+ People Support - 1 Month: ₹1199
                    </label>
                  </div>
                  <div className="price-card">
                    <input
                      type="radio"
                      id="support300_2months"
                      name="postPricing"
                      value="2199"
                      onChange={(e) =>  UpiPayment(e.target.value)}
                    />
                    <label htmlFor="support300_2months">
                      300+ People Support - 2 Months: ₹2199
                    </label>
                  </div>
                  <div className="price-card">
                    <input
                      type="radio"
                      id="support300_3months"
                      name="postPricing"
                      value="3199"
                      onChange={(e) =>  UpiPayment(e.target.value)}
                    />
                    <label htmlFor="support300_3months">
                      300+ People Support - 3 Months: ₹3199
                    </label>
                  </div>
                  <div className="price-card">
                    <input
                      type="radio"
                      id="support450_1month"
                      name="postPricing"
                      value="1599"
                      onChange={(e) =>  UpiPayment(e.target.value)}
                    />
                    <label htmlFor="support450_1month">
                      450+ People Support - 1 Month: ₹1599
                    </label>
                  </div>
                  <div className="price-card">
                    <input
                      type="radio"
                      id="support450_2months"
                      name="postPricing"
                      value="3099"
                      onChange={(e) =>  UpiPayment(e.target.value)}
                    />
                    <label htmlFor="support450_2months">
                      450+ People Support - 2 Months: ₹3099
                    </label>
                  </div>
                  <div className="price-card">
                    <input
                      type="radio"
                      id="support450_3months"
                      name="postPricing"
                      value="4699"
                      onChange={(e) =>  UpiPayment(e.target.value)}
                    />
                    <label htmlFor="support450_3months">
                      450+ People Support - 3 Months: ₹4699
                    </label>
                  </div>
                </div>
              </>
            )}
            {selectedPlatform === "facebook" ||
              (selectedPlatform === "twitter" && (
                <>
                  <h3>Pricing Information:</h3>
                  <p>COMING SOON</p>
                </>
              ))}
          </div>

          <div id="totalPrice"></div>

          <div className="qr-code-container">
            <div id="qrcode"></div>
            <a href="#" id="googlePay" className="circle-link">
        <svg
          height="45px"
          width="45px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 2065.9 2064.8"
          xmlSpace="preserve"
        >
          <circle className="st0" cx="1032.4" cy="1032.4" r="1032.4" />
          <path
            className="st1"
            d="M1032.4,2064.8c-191.9,0.3-380-53.1-543.1-154.2l691.6-1900c122.4,17.6,240.7,57.2,349,116.9
            c499.8,274.2,682.8,901.6,408.6,1401.5C1757.1,1859.8,1409.7,2065.2,1032.4,2064.8z"
          />
          <path
            className="st2"
            d="M682.2,1027.9c0.3-17.4-1.5-34.8-5.3-51.7H439.3v93.9h139.5c-5.3,33.3-24,62.9-51.7,82.1l-0.5,3.1l75.1,58.2
            l5.2,0.5C654.6,1169.9,682.2,1105,682.2,1027.9"
          />
          <path
            className="st3"
            d="M439.3,1275.3c68.3,0,125.7-22.5,167.6-61.3l-79.8-61.9c-25.9,17.4-56.6,26.2-87.7,25.3
            c-65.6-0.4-123.6-42.8-144-105.2l-3,0.3l-78.1,60.4l-1,2.8C256.1,1221.4,343.6,1275.4,439.3,1275.3"
          />
          <path
            className="st4"
            d="M295.3,1072.3c-5.5-16.1-8.4-33-8.4-50.1c0.1-17,2.9-33.9,8.2-50.1l-0.1-3.3l-79.1-61.4l-2.6,1.2
            c-36,71.5-36,155.7,0,227.2L295.3,1072.3"
          />
          <path
            className="st5"
            d="M439.3,867.1c36.3-0.6,71.3,12.9,97.8,37.7l71.4-69.7c-45.8-43-106.5-66.5-169.3-65.8
            c-95.7,0-183.2,53.9-226.1,139.5l81.8,63.5C315.5,909.9,373.6,867.5,439.3,867.1"
          />
          <path
            className="st0"
            d="M1080.5,1050.4v183.9h-58.8V780h155.9c37.5-0.8,73.9,13.3,101,39.3c53.1,48.9,56.5,131.7,7.5,184.8
              c-2.4,2.6-4.9,5.1-7.5,7.5c-27.2,25.8-63.5,39.7-101,38.7L1080.5,1050.4L1080.5,1050.4z M1080.5,835. 9v158.6h98.5
              c21.8,0.7,42.9-7.8,58.1-23.5c30.7-29.5,31.6-78.2,2.1-108.9c-0.2-0.2-0.4-0.4-0.6-0.6c-0.5-0.5-1-1.1-1. 5-1.5
              c-15.1-16-36.2-24.7-58.1-24.1L1080.5,835.9z"
          />
        </svg>
      </a>

      <a href="#" id="phonePe" className="circle-link">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 122.88 122.88"
          width="45px"
          height="45px"
        >
          <title>phonepe</title>
          <path
            className="cls-1"
            d="M75.56,1.66a61.42,61.42,0,1,0,45.66,73.9A61.42,61.42,0,0,0,75.56,1.66Z"
          />
          <path
            className="cls-2"
            d="M89.32,45.41A4.54,4.54,0,0,0,84.86,41H76.62L57.75,19.33a7,7,0,0,0-7.21-2.06L44,19.33a1.52,1.52,0,0,0-.69,2.4L63.92,41.29H32.7A1.63,1.63,0,0,0,31,43v3.43a4.54,4.54,0,0,0,4.46,4.46h4.81V67.37c0,12.35,6.52,19.56,17.5,19.56a23.66,23.66,0,0,0,9.61-1.72v11a5.42,5.42,0,0,0,5.49,5.49h4.8a2.22,2.22,0,0,0,2.06-2.06V50.56H87.6a1.63,1.63,0,0,0,1.72-1.72V45.41Z"
          />
        </svg>
      </a>

      <a href="#" id="paytm" className="circle-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="45"
          height="45"
          viewBox="0 0 48 48"
        >
          <path
            fill="#0d47a1"
            d="M5.446 18.01H.548c-.277 0-.502.167-.503.502L0 30.519c-.001.3.196.45.465.45.735 0 1.335 0 2.07 0C2.79 30.969 3 30.844 3 30.594 3 29.483 3 28.111 3 27l2.126.009c1.399-.092 2.335-.742 2.725-2.052.117-.393.14-.733.14-1.137l.11-2.862C7.999 18.946 6.949 18.181 5.446 18.01z"
          />
        </svg>
      </a>
          </div>
          <label htmlFor="utr">Enter UTR or Transaction ID:</label>
          <input
            type="text"
            id="utr"
            name="utr"
            placeholder="Enter UTR or Transaction ID"
            value={utr}
            onChange={(e) => setUtr(e.target.value)}
            required
          />
          <button type="submit" id="payButton">
            Pay {postPrice ? postPrice : ""}
          </button>
        </form>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <strong>Real Engagement:</strong> Every single like, comment, and
            follower is real, ensuring genuine growth.
          </li>
          <li>
            <strong>Comprehensive Support:</strong> We’ll enhance your presence
            by delivering likes, comments, and follows across all your posts,
            reels, and stories.
          </li>
          <li>
            <strong>Tailored Solutions:</strong> Choose from our meticulously
            crafted packages designed to meet your exact needs and goals.
          </li>
          <li>
            <strong>Unmatched Quality:</strong> Experience unparalleled quality
            in engagement with a focus on authentic interactions.
          </li>
          <li>
            <strong>Exclusive Opportunity:</strong> Act now to secure your spot
            and dominate your social media presence.
          </li>
        </ul>
      </div>
      </>
    );
  };

