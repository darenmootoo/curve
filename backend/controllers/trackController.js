const Track = require("../models/trackModel");
const Contract = require("../models/contractModel");

const factory = {
  saveTrackHelper,
  trackController
}

 async function saveTrackHelper (track, index)  {
  const contractName = track.Contract;
  let contractId = null;
  let errorObject = null;

  if (contractName && contractName.length > 0) {
    const relatedContract = await Contract.findOne({
      Name: contractName,
    });

    if (relatedContract) {
      contractId = relatedContract._id;
    } else {
      errorObject = {
        lineNumber: index + 2,
        error: "Contract not found",
      };
      console.trace(errorObject);
      return errorObject;
    }
  }

  const { Title, Version, Artist, ISRC, PLine, Aliases } = track;

  const formattedISRC = ISRC.replace(/[\s-]+/g, "");

  const newTrack = new Track ({
    Title,
    Version,
    Artist,
    ISRC: formattedISRC,
    "P Line": PLine,
    Aliases: Aliases.split(";"),
    "Contract ID": contractId,
  });

  await newTrack.save();

  return newTrack

};

 async function trackController(data) {
  const trackData = [...data].slice(1);
  const trackArray = [];

  trackData.forEach(async (track, index) => {
    const result = await factory.saveTrackHelper(track, index);
    if (!result.hasOwnProperty("error")) {
      trackArray.push(result);
    }
  });
  return trackArray;
};

module.exports = factory;
