const logger = require('../logger');
const PolicyHolder = require('../models/Policy/policyHolder'); //policyHolerList
const CoveredCountry = require('../models/Policy/coveredCountry'); //coveredCountryList
const PolicyCoverage = require('../models/Tariff/Coverage'); //policyCoverageList
const PolicyPlan = require('../models/Policy/policyPlan'); //policyPlanList
const PolicyDriver = require('../models/Policy/policyDriver'); //policyDriverList
const PolicyRisk =  require('../models/Policy/policyRisk'); //policyRiskList
const Policy = require('../models/Policy/policy'); //policy
const PolicyHolderPrimaryAddress = require('../models/Policy/policyHolderPrimaryAddress'); //policyHolderPrimaryAddressList
const PolicyHolderPrimaryContact = require('../models/Policy/policyHolderPrimaryContact'); //policyHolderPrimaryContactList
const PolicyHolderPrimaryAccount = require('../models/Policy/policyHolderPrimaryAccount'); //policyHolderPrimaryAccountList

exports.compareQuote = async (req, res) => {
    try {
        logger.info(`Received request: ${req.method} ${req.url} ${JSON.stringify(req.body)}`);

        //Policy
        const policy = new Policy(req.body.Policy);
        console.log("Policy : " + policy)
        //await policy.save();

        //PolicyRisk
        const policyRiskList = req.body.PolicyRiskList;
        if(Array.isArray(policyRiskList)) {
            policyRiskList.forEach(elementRisk => {
                const policyRisk = new PolicyRisk(elementRisk);
                console.log("PolicyRisk : " + policyRisk);

                const policyDriverList = elementRisk.PolicyDriverList;
                if(Array.isArray(policyDriverList)) {
                    policyDriverList.forEach(elementDriver => {
                        const policyDriver = new PolicyDriver(elementDriver);
                        console.log("PolicyDriver : " + policyDriver);
                    });
                }
                const policyPlanList = elementRisk.PolicyPlanList;
                if(Array.isArray(policyPlanList)) {
                    policyPlanList.forEach(elementPlan => {
                        const policyPlan = new PolicyPlan(elementPlan);
                        console.log("PolicyPlan : " + policyPlan);
                    
                        const policyCoverageList = elementPlan.PolicyCoverageList;
                        if(Array.isArray(policyCoverageList)) {
                            policyCoverageList.forEach(elementCoverage => {
                                const policyCoverage = new PolicyCoverage(elementCoverage);
                                console.log("PolicyCoverage : " + policyCoverage);

                                const coveredCountryList = policyCoverageList.CoveredCountryList;
                                if(Array.isArray(coveredCountryList)) {
                                    coveredCountryList.forEach(elementCountry => {
                                        const country = new CoveredCountry(elementCountry);
                                        console.log("CoveredCountry : " + country);
                                    });
                                }
                            });
                        }
                        
                    });
                }
                //policyRisk.save();
            });
        }
        
        //PolicyHolder
        const policyHolderList = req.body.PolicyHolderList;
        if(Array.isArray(policyHolderList)) {
            policyHolderList.forEach(element => {
                const policyHolder = new PolicyHolder(element);
                console.log("PolicyHolder : " + policyHolder);
                //policyHolder.save();
            });
        }
        res.status(202).json({ message: "Work In Progress"});
        logger.info(`Sent response: ${req.method} ${req.url} ${JSON.stringify({ message: "Work In Progress"})}`);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.draftPolicy = async (req, res) => {
    try {
        logger.info(`Received request: ${req.method} ${req.url} ${JSON.stringify(req.body)}`);

        //Policy
        const policy = new Policy(req.body.Policy);
        console.log("Policy : " + policy)
        
        //PolicyRisk
        const policyRiskList = req.body.PolicyRiskList;
        if(Array.isArray(policyRiskList)) {
            policyRiskList.forEach(elementRisk => {
                const policyRisk = new PolicyRisk(elementRisk);
                console.log("PolicyRisk : " + policyRisk);

                const policyDriverList = elementRisk.PolicyDriverList;
                if(Array.isArray(policyDriverList)) {
                    policyDriverList.forEach(elementDriver => {
                        const policyDriver = new PolicyDriver(elementDriver);
                        console.log("PolicyDriver : " + policyDriver);
                    });
                }
                const policyPlanList = elementRisk.PolicyPlanList;
                if(Array.isArray(policyPlanList)) {
                    policyPlanList.forEach(elementPlan => {
                        const policyPlan = new PolicyPlan(elementPlan);
                        console.log("PolicyPlan : " + policyPlan);
                    
                        const policyCoverageList = elementPlan.PolicyCoverageList;
                        if(Array.isArray(policyCoverageList)) {
                            policyCoverageList.forEach(elementCoverage => {
                                const policyCoverage = new PolicyCoverage(elementCoverage);
                                console.log("PolicyCoverage : " + policyCoverage);

                                const coveredCountryList = elementCoverage.CoveredCountryList;
                                if(Array.isArray(coveredCountryList)) {
                                    coveredCountryList.forEach(elementCountry => {
                                        const country = new CoveredCountry(elementCountry);
                                        console.log("CoveredCountry : " + country);
                                    });
                                }
                            });
                        }
                        
                    });
                }
            });
        }

        //PolicyHolder
        const policyHolderList = req.body.PolicyHolderList;
        if(Array.isArray(policyHolderList)) {
            policyHolderList.forEach(elementHolder => {
                const policyHolder = new PolicyHolder(elementHolder);
                console.log("PolicyHolder : " + policyHolder);

                const policyHolderPrimaryAccount = elementHolder.PolicyHolderPrimaryAccount;
                if(Array.isArray(policyHolderPrimaryAccount)) {
                    policyHolderPrimaryAccount.forEach(elementPrimaryAccount => {
                        const primaryAccount = new PolicyHolderPrimaryAccount(elementPrimaryAccount);
                        console.log("PolicyHolderPrimaryAccount : " + primaryAccount);
                    });
                }

                const policyHolderPrimaryContact = elementHolder.PolicyHolderPrimaryContact;
                if(Array.isArray(policyHolderPrimaryContact)) {
                    policyHolderPrimaryContact.forEach(elementPrimaryContact => {
                        const primaryContact = new PolicyHolderPrimaryContact(elementPrimaryContact);
                        console.log("PolicyHolderPrimaryContact : " + primaryContact);
                    });
                }

                const policyHolderPrimaryAddress = elementHolder.PolicyHolderPrimaryAddress;
                if(Array.isArray(policyHolderPrimaryAddress)) {
                    policyHolderPrimaryAddress.forEach(elementPrimaryAddress => {
                        const primaryAddress = new PolicyHolderPrimaryAddress(elementPrimaryAddress);
                        console.log("PolicyHolderPrimaryAddress : " + primaryAddress);
                    });
                }
            });
        }

        res.status(202).json({ message: "Work In Progress"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.issuePolicy = async (req, res) => {
    try {
        const policy = await Policy.findOne({QuotationNumber: req.body.QuotationNumber});
        if (!policy) return res.status(404).json({ message: 'Policy not found' });
        if (!req.body.PaymentStatus) return res.status(400).json({ message: "Payment is Not Successful"});
        policy.PolicyStatus = true;
        const updatedPolicy = await policy.save();
        GenerateUniquePolicyNumber()
        res.status(201).json({ PolicyId: updatedPolicy.PolicyNo});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};