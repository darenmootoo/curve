const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
let chai = require("chai");
const sinon = require("sinon");
const Track = require("../models/trackModel");
const Contract = require("../models/contractModel");
const factory = require("../controllers/trackController");
var sinonStubPromise = require('sinon-stub-promise');
sinonStubPromise(sinon);


const mockDataWithContract = [
  {
    ID: "Leave blank if a new Track",
    ISRC: "Any dashes, spaces or other characters will be stripped out on import",
    Aliases: "Separate multiple alises using a semi-colon (;)",
    Contract: "Should match the contract name exactly",
  },
  {
    Title: "Track 1",
    Version: "Version 1",
    Artist: "Artist 1",
    ISRC: "ISRC1",
    "P Line": "P Line 1",
    Aliases: "aliases1;aliases2",
    Contract: "Contract 1",
  },
];

const mockTrack = {
  Title: "Track 1",
  Version: "Version 1",
  Artist: "Artist 1",
  ISRC: "ISRC1",
  Aliases: ["aliases1", "aliases2"],
  'Contract ID': 'new ObjectId("638961aa693f618efb88e9fe")',
  _id: 'new ObjectId("638f2a1fc017b1a817541077")'
};


const expect = chai.expect;

describe("trackController", () => {
  it("should return the correct Track",  async function ()  {
    sinon.stub(factory, "saveTrackHelper").resolves(mockTrack);
    return factory.trackController(mockDataWithContract).then(function (test)  {
      console.log(test);
      expect(test[0]).to.equal([mockTrack][0]);
    });
  });
});
