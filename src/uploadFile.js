const pinataApiKey = "dddc399bf01db73cc9bc";
const pinataSecretApiKey = "e938b65a4cc1211ea65c629a6170914e0dfb90d2c9efea919f4fc6b0dcf31286";
const axios = require('axios');
const fs = require('fs');
const FormData = require("form-data");

const pinFileToIpfs = async () => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIpfs`;
    let data = new FormData();
    data.append("file", fs.createReadStream("./doc.js"));

    const res = await axios.post(url, data, {
        maxContentLength: "Infinity", 
        headers: {
          "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
          pinata_api_key: pinataApiKey, 
          pinata_secret_api_key: pinataSecretApiKey,
        },
      });

    console.log(res.data);
};

pinFileToIpfs();