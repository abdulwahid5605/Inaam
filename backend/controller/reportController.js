const { request } = require("express");
const Doghandler = require("../models/dogHandlerModel");
const SearchArea = require("../models/SearchAreaModel");
const Report = require("../models/ReportModel");
const { sendEmail } = require("../utils/sendEmail");

exports.addReport = async (req, res) => {
  try {
    if (req.body.isSent) {
      const report = new Report(req.body);
      await report.save();
      res.status(201).json(report);
    } else {
      const doghandler = await Doghandler.findById(request.body?.dogHandler);
      // const searchArea = await SearchArea.findById(request.body.searchArea);
      if (doghandler) {
        const queryMessage = `
        Name: ${req.body.name}\n
        Email: ${doghandler.reporter.email}\n
       
      `;

        await sendEmail({
          email: doghandler.reporter.email, // Replace with your email address or recipient's email
          subject: "Report",
          message: queryMessage,
        });
      }

      const report = new Report(req.body);
      await report.save();
      res.status(201).json(report);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

exports.updateReport = async (req, res) => {
  try {
    const { id } = req.params; // Get the report ID from the request parameters
    const { isSent } = req.body; // Exclude isSent from update data

    // Update the report based on the provided ID
    const report = await Report.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    // If the report is marked as sent, send an email
    if (isSent) {
      const doghandler = await Doghandler.findById(report.dogHandler);
      if (doghandler) {
        const queryMessage = `
        Name: ${report.name}\n
        Email: ${doghandler.reporter.email}\n
      `;

        await sendEmail({
          email: doghandler.reporter.email,
          subject: "Updated Report",
          message: queryMessage,
        });
      }
    }

    res.status(200).json(report);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

exports.getAllReportsByDogHandlerId = async (req, res) => {
  try {
    const reports = await Report.find({ dogHandler: req.params.dogHandlerId });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllReportsByDogHandlerIdAndStatus = async (req, res) => {
  try {
    const reports = await Report.find({
      dogHandler: req.params.dogHandlerId,
      isSent: req.params.isSent,
    });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateReport = async (req, res) => {
  try {
    const report = await Report.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }
    res.json(report);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteReport = async (req, res) => {
  try {
    const report = await Report.findByIdAndDelete(req.params.id);
    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }
    res.json({ message: "Report deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
