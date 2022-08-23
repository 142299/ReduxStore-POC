import "./App.css";
import Form from "./Components/Form";
import PageNotFound from "./Components/PageNotFound";
import AboutUs from "./Components/AboutUs";
import PrivateRoute from "./Components/PrivateRoutes";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector , useDispatch } from 'react-redux';

const { mapToNewObject } = require('@perpk/json-xform');

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

const sampleRes = {
  "result": [{
    "cases": {
      "name": "pavithra", "caseId": 113,
      "correlationId": "1",
      "caseStatus": "Active",
      "effectiveStartDate": "2019-05-08T14:05:32.000000+00:00",
      "programName": "CRM"
    }
  }]
}

function App() {
  const tranfJSON = mapToNewObject(sampleRes,
    {
      "fieldset": [{
        "fromEach": {
          "field": "result",
          "fieldset": [
            {
              "from": "cases.name",
              "to": "cases.fullname"
            },
            {
              "from": "cases.caseStatus",
              "to": "cases.status"
            }
          ]
        }

      }]
    })
  console.log(tranfJSON)

  useDispatch({ type: "cases" },tranfJSON)

  // const convertedJSON = mapToNewObject(apiRes,{"fieldset":[{
  //   "fromEach":{
  //     "field":"object.result",
  //     "flatten" :true,
  //     "fieldset" : [
  //           {

  //             "to":"caseList",
  //             "fieldset" : [
  //               {
  //                 "from" : "object.result.cases.caseId",
  //                 "to":"cases.consumerID222"

  //               }]
  //           }]

  //   }
  // }]})
  // console.log(convertedJSON, "convertedJSONconvertedJSON")


  var str = '{"x":0,"value":200, "id":"download", "index":0, "name":"download"}'  
 
//Convert the JSON string to a JavaScript object 
var obj = JSON.parse(str); 
//var obj1 = JSON.parse(sampleRes); 



 
//Create a new object with the value for 'id' or 'name' as the key 
//I've used id, you can change it to use name as obj.name 
var resultant_obj = {}; 
//resultant_obj[obj.id] = obj.value;

resultant_obj["casesslist111"] = sampleRes.result[0].cases

resultant_obj.casesslist111.status =  sampleRes.result[0].cases.caseStatus??"Active"

delete  resultant_obj.casesslist111.caseStatus;
 
console.log(resultant_obj, "22222222"); 

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
