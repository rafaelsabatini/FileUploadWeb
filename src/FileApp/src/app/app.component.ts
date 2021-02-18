import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


constructor(private httpClient:HttpClient) {
  
}

ProposalCode: any;
ProductCode: any;
CustomerDocument: any;
message: string = "";

fileData: any;

selectFile(event: any) {
  debugger;
  this.fileData = event.target.files[0];
}

onSubmit() {
debugger;
    let formdata = new FormData();
    let proposalViewModel = {
      "ProposalCode": +this.ProposalCode,
      "ProductCode": +this.ProductCode,
      "CustomerDocument": this.CustomerDocument
    };

    formdata.append("FileUpload",this.fileData);
    formdata.append("proposal",JSON.stringify(proposalViewModel));

    this.httpClient
    .post<any>("https://localhost:5001/Proposal",formdata)
    .subscribe((res)=>{this.message = res});
}

}
