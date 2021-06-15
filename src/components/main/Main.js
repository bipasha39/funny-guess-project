import React, { useState, useEffect } from "react";
import "./main.css";

function Guess() {
  return (
    <div className="container-card">
        <div className="form-control">
      <form >
        <div className="row mb-3">
          <label for="First Name" class="col-sm-2 col-form-label">
           First Name 
          </label>
          <div class="col-sm-10">
            <input type="text" className="form-control" id="input3" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="Last Name" class="col-sm-2 col-form-label">
            Last Name
          </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="input13" />
          </div>
        </div>
      </form>
      </div>
      <div className="button">
      <button type="submit" className="btn btn-primary">
        Show Me
      </button>
      </div>
      
    </div>
  );
}

export default Guess;
