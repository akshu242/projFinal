import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  cliaUrl = 'http://localhost:8080/liccliaproject/clia/';
  agentsUrl = 'http://localhost:8080/liccliaproject/agents/';
  customersUrl = 'http://localhost:8080/liccliaproject/policyHolders/';
  policyDetailsUrl = 'http://localhost:8080/liccliaproject/policies';
  healthDetailsUrl = 'http://localhost:8080/liccliaproject/healthDetails';
  addressDetailsUrl = 'http://localhost:8080/liccliaproject/address';
  constructor(public http: HttpClient) { }

// Data services for clia

  loginCLIA(data) {
    return this.http.get('http://localhost:8080/liccliaproject/clia/login/' + data.cliaId + '/' + data.phNumber);
  }

  getDataOfClia() {
    return this.http.get(this.cliaUrl);
  }

   editCliaById(cliaId , clia) {
     return this.http.put('http://localhost:8080/liccliaproject/clia/' + cliaId , clia);
   }


// Data services for agent
  getDataOfAgents() {
    return this.http.get(this.agentsUrl);
  }

  addAgent(agent) {
    console.log(agent);
    return this.http.post(this.agentsUrl, agent);
  }

  editAgentById( agentId , agent) {
    console.log(agent);

    return this.http.put('http://localhost:8080/liccliaproject/agents/editagent/' + agentId , agent);
  }
  editCustomerById(custId , customer) {
    console.log(customer);
    return this.http.put('http://localhost:8080/liccliaproject/policyHolders/update/' + custId , customer );
  }


  getAgentById(agentId) {
    return this.http.get(this.agentsUrl + agentId);
  }

  loginAgent(data) {
    return this.http.get('http://localhost:8080/liccliaproject/agents/login/' + data.agentId + '/' + data.phNumber);
  }


// data services for cust
  loginCustomer(data) {
    return this.http.get('http://localhost:8080/liccliaproject/policyHolders/login/' + data.custId + '/' + data.phNumber);
  }

  getDataOfCustomers() {
    return this.http.get(this.customersUrl);
  }

  getCustomerById(custId) {
    return this.http.get(this.customersUrl + custId);
  }


  addCustomer(agentId , customer) {
    console.log(customer + agentId);
    return this.http.put('http://localhost:8080/liccliaproject/policyHolders/addCustomer/' + agentId , customer);
  }


// service for policies
getDataOfPolicies() {
  return this.http.get(this.policyDetailsUrl);
}

// data service for addressDetails
addAddressDetails(custId , address) {
  return this.http.put('http://localhost:8080/liccliaproject/address/' + custId , address );
  }

// data service for hDetails
  addHealthDetails(custId , health) {
  return this.http.put('http://localhost:8080/liccliaproject/healthDetails/addHealth/' + custId , health );
  }


  // data service for policyDetails
  addPolicyDetails(custId , policy) {
    return this.http.put('http://localhost:8080/liccliaproject/policies/addPolicy/' + custId , policy );
    }

  isCLIA() {
    let clia = JSON.parse(window.sessionStorage.getItem('object'));
    // console.log(clia);
    if(clia!= null){
      if (clia.role === 'CLIA') {
        return true;
      }
      return false;
    }
    return false;
  }

  isAgent() {

    let agent = JSON.parse(window.sessionStorage.getItem('object'));
    // console.log(agent);
    if(agent!= null){
      if (agent.role === 'AGENT') {
        return true;
      }
      return false;
    }
    return false;
  }

  isCustomer() {
    let customer = JSON.parse(window.sessionStorage.getItem('object'));
    // console.log(customer);
    if(customer != null) {
      if (customer.role === 'CUSTOMER') {
        return true;
      }
      return false;
    }
    return false;
  }

}
