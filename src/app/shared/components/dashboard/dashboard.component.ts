
import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { PeriodicElement } from '../../model/studentData.interface';
import { StudentDataService } from '../../services/student-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class DashboardComponent implements OnInit {
  
    dataSource :any[] = [];
    columnsToDisplay = ['username', 'password','gender', 'contact'];
    columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
    expandedElement !: any | null;

  constructor(private _stdService: StudentDataService,
              private _router: Router) { }

  ngOnInit(): void {
    this.dataSource = this._stdService.studentData
  }
  onEditUser(event:any){
  console.log(event);
    this._router.navigate(['stdform/', event.id])
  }

  onStdDelete(id:any){
   this._stdService.onDeleteStdData(id);
  //  this._router.navigate([''])
    
  }

}
