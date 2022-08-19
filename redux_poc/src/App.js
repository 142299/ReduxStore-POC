import "./App.css";
import Form from "./Components/Form";
import PageNotFound from "./Components/PageNotFound";
import AboutUs from "./Components/AboutUs";
import PrivateRoute from "./Components/PrivateRoutes";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const {mapToNewObject} = require('@perpk/json-xform');

const apiRes = {
  "validationList": null,
  "errorResponse": null,
  "status": "success",
  "object": {
    "result": [
      {
        "cases": {
          "caseId": 113,
          "correlationId": "1",
          "caseStatus": "Active",
          "effectiveStartDate": "2019-05-08T14:05:32.000000+00:00",
          "programName": "CRM",
          "createdOn": "2021-06-29T18:52:08.000000+00:00",
          "createdBy": "4020",
          "updatedOn": "2021-06-29T18:52:08.000000+00:00",
          "updatedBy": "4020",
          "needTranslatorIndicator": false,
          "assistiveHearingServicesIndicator": false
        },
        "consumers": [
          {
            "consumerId": 314,
            "consumerFirstName": "Pavithra",
            "consumerLastName": "Jayanna",
            "consumerMiddleName": null,
            "consumerSuffix": null,
            "consumerPrefix": null,
            "consumerDateOfBirth": "2021-09-01",
            "consumerStatus": "Inactive",
            "consumerIdentificationNumber": null,
            "consumerConsent": [],
            "consumerSSN": "575675658",
            "consumerType": "Consumer",
            "genderCode": "Female",
            "ethnicityCode": null,
            "raceCode": null,
            "usResidentStatusCode": null,
            "aiNa": null,
            "doNotCall": null,
            "dateOfDeath": null,
            "dateOfDeathNotifiedDate": null,
            "dateOfDeathNotifiedBy": null,
            "ssnValidationCode": null,
            "ssnValidationAgency": null,
            "dateOfSsnValidation": null,
            "notBornInd": null,
            "mergedConsumerId": null,
            "mergeReason": null,
            "createdOn": "2021-07-08T10:19:51.000000+00:00",
            "createdBy": "214",
            "updatedOn": "2021-08-23T21:18:13.000000+00:00",
            "updatedBy": "214",
            "correlationId": "999405051084",
            "uiid": "999105644256",
            "consumerMatchedCrit": true,
            "effectiveStartDate": "2021-07-07T18:30:00.000000+00:00",
            "effectiveEndDate": "2021-08-04T03:59:59.000000+00:00",
            "pregnancyDueDate": null,
            "relationShip": "Spouse"
          }
        ],
        "contacts": [
          {
            "addressess": null,
            "emails": null,
            "phones": [
              {
                "createdOn": "2021-07-09T07:04:59.000000+00:00",
                "createdBy": "152",
                "updatedOn": "2021-07-09T07:04:59.000000+00:00",
                "updatedBy": "152",
                "effectiveStartDate": "2021-07-09T04:00:00.000000+00:00",
                "effectiveEndDate": null,
                "correlationId": null,
                "uiid": null,
                "externalRefId": 314,
                "externalRefType": "consumer",
                "primaryIndicator": false,
                "phoneId": 287,
                "phoneType": "Cell",
                "phoneNumber": "4322222222",
                "contactTypeId": 743,
                "smsEnabledInd": false,
                "doesNotWorkInd": false,
                "canReceiveTextInd": false,
                "phoneCorrelationId": null,
                "status": "Active",
                "comments": null,
                "phoneSource": null
              }
            ],
            "faxes": null
          }
        ]
      }
    ]
  }
}


function App() {
 const tranfJSON =  mapToNewObject({"name":"pavithra"},{"fieldset":[{
    "from":"name",
    "to":"adress.fullname"
  }]})
  console.log(tranfJSON)

const convertedJSON = mapToNewObject(apiRes,{"fieldset":[{
  "fromEach":{
    "field":"object.result",
    "flatten" :true,
    "fieldset" : [
          {
            "from" : "cases.caseId",
            "to" :"consumerId"
          }]
         
  }
}]})
console.log(convertedJSON, "convertedJSONconvertedJSON")

  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/" component={Home} exact />
          <PrivateRoute path="/form" component={Form} />
          <PrivateRoute path="/about" component={AboutUs} />
          <Route path="/*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
