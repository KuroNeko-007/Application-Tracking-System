import React from "react";
import { Link } from "react-router-dom";
  import '../Asserts/card.css';
import {BsCurrencyRupee} from "react-icons/bs";
import { useState } from "react";
function ApplyCard(){

  const ApplyJob = [
    {
          id: 1,
          company: "UI/UX Designer",
          img: "Design Co.",
          position: "Los Angeles, USA",
          date:"12/12/12",
          miniexp:"0-1",
          salary:"10 Lack PA",
          location:"LA",
        },
        {
          id: 2,
          company: "Data Analyst",
          img: "Data Corp.",
          position: "Chicago, USA",
          date:"12/12/12",
          miniexp:"0-1",
          salary:"10 Lack PA",
          location:"LA",
        },
        {
            id: 1,
            company: "UI/UX Designer",
            img: "Design Co.",
            position: "Los Angeles, USA",
            date:"12/12/12",
            miniexp:"0-1",
            salary:"10 Lack PA",
            location:"LA",
            
          },
          {
            id: 2,
            company: "Data Analyst",
            img: "Data Corp.",
            position: "Chicago, USA",
            date:"12/12/12",
            miniexp:"0-1",
            salary:"10 Lack PA",
            location:"LA",
          },
          {
            id: 2,
            company: "Data Analyst",
            img: "Data Corp.",
            position: "DEVOPS",
            date:"12/12/12",
            miniexp:"0-1",
            salary:"10 Lack PA",
            location:"LA",
          },
          
          
      ];
      
      const [searchQuery, setSearchQuery] = useState('');
      const [filteredJobs, setFilteredJobs] = useState(ApplyJob);
    
      const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
    
        const filtered = ApplyJob.filter((job) => {
          const position = job.position.toLowerCase();
          const company = job.company.toLowerCase();
          const location = job.location.toLowerCase();
    
          return position.includes(query) || company.includes(query) || location.includes(query);
        });
    
        setFilteredJobs(filtered);
      };

  return(
    <div>
    <div class="input-group justify-content-center">
        <div class="form-outline">
          <input id="search-input" type="search"  class="form-control" placeholder="Search" 
          value={searchQuery}
          onChange={handleSearchChange} />
        </div>
        <button id="search-button" type="button" class="btn btn-primary">
        <i class="fa fa-search"></i>
        </button>
    </div>
      <Link to="/jobdesc" class="reset">  

  <div class="container apply-container border my-5 px-5">
<div class="row">
            {filteredJobs.map((job) =>(
              <div class="col-4">
        <div class="card my-5 shadow">
            <div class="card-header border-0">
                <h5 class="card-title">{job.company}</h5>
            </div>
            <div class="card-body pt-0">
                <div class="card-cust">
                    <div class="card-cust-title-wrapper">
                        <div class="comp-prof">
                            
                        </div>
                        <div class="card-cust-position">
                            <span class="card-cust-title">{job.position}</span>
                            <span class="card-cust-date">{job.date}</span>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    <ol class="requirements list-unstyled">
                        <li class="req-point"><p class="p-1"><span>Job Experience <i class="fa fa-solid fa-briefcase mx-2"> </i> : {job.miniexp} </span></p></li>
                        <li class="req-point"><p><span> Salary  <BsCurrencyRupee fontSize="23px"  /> : {job.salary}</span></p></li>
                        
                    </ol>
                </div>
            </div>
        </div>
    </div>

))}
</div>
</div>
</Link>
</div>
  );
}
export default ApplyCard;
