import React from "react";
import ReactDOM from "react-dom";
import {render} from "react-dom";

function IncomeModal(props){
	return (
		<div>
			<div className="modal">
	 	 		<a className="modal-trigger waves-effect waves-light btn" href="#modal1">Modal</a>
	 	 		
	 	 		<div id="income-modal" className="modal modal-fixed-footer">
	 	 			<div className = "modal-content">
	 	 				<h4>Modal Header</h4>
	 	 				<p>This is a new paragraph</p>
	 	 			</div>
	 	 			<div className="modal-footer">
	 	 				<a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
	 	 			</div>
	 	 		</div>
			</div>
		</div>
	);
}