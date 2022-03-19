const { application } = require("express");
const express = require("express");
const Company = require("../models/Company");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let fields = JSON.parse(req.body.fields);
    const addedCompany = await Company.create(fields);

    res.send(200, {
      message: "Company Added Successfully",
      company: addedCompany,
    });
  } catch (error) {
    res.send(500, "Some error occurred!");
  }
});
router.get("/", async (req, res) => {
  try {
    const companies = await Company.find({});

    res.send(200, {
      message: "Companies TRetrieved Successfully",
      companies: companies,
    });
  } catch (error) {
    res.send(500, "Some error occurred!");
  }
});

router.post("/single", async (req, res) => {
  try {
    const company = await Company.findById(req.body.companyId);

    res.send(200, {
      message: "Company Found Successfully",
      company: company,
    });
  } catch (error) {
    console.log(error);
    res.send(500, { msg: "Some error occurred!", error: error });
  }
});

router.post("/delete", async (req, res) => {
  try {
    const deletedCompany = await Company.deleteOne({
      _id: req.body.id,
    });
    res.send(200, {
      message: "Company Deleted Successfully",
      company: deletedCompany,
    });
  } catch (error) {
    res.send(500, "Some error occurred!");
  }
});
router.patch("/", async (req, res) => {
  try {
    const bodyData = req.body;
    // const updatedData = {
    //   companyname: bodyData.companyname,
    //   companywebsite: bodyData.companywebsite,
    //   companyphonenumber: bodyData.companyphonenumber,
    //   companyaddress: bodyData.companyaddress,
    //   companycity: bodyData.companycity,
    //   companystate: bodyData.companystate,
    //   companycountry: bodyData.companycountry,
    //   industrylist: bodyData.industrylist,
    // };
    const company = await Company.updateOne(
      { _id: req.body.companyId },
      JSON.parse(req.body.fields)
    );
    res.send(200, {
      message: "Company Updated Successfully",
      company: company,
    });
  } catch (error) {
    res.send(500, "Some error occurred!");
  }
});

module.exports = router;
