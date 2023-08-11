import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project.model';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
	closeResult = '';

	constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

	open(content:any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result:any) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

  form = new FormGroup({});
  model = { };
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      props: {
        label: 'Name',
        placeholder: 'Enter name',
        type:'text',
        required: true,
      }
    },
    {
      key: 'description',
      type: 'input',
      props: {
        label: 'Description',
        placeholder: 'Enter Description',
        type:'text',
        required: true,
      }
    },
    {
      key: 'owner',
      type: 'input',
      props: {
        label: 'owner',
        placeholder: 'Enter owner',
        type:'text',
        required: true,
      }
    }

  ];

  onSubmit(model:any){
    if(this.form.valid){
      console.log("model : ",model);
    }else{
      console.log("invalid form submition");
    }
  }


  projects: Project[] = [
    {
      name: 'Project Two',
      description:
        'this is description of the project we are going to implement do.',
      owner: 'Abduljebar Sani no2',
      ownerPhoto:
        'https://assets.codepen.io/460692/internal/avatars/users/default.png',
      ownerTitle: 'Command Executive Officer',
      date: new Date(),
      backUrl: 'https://source.unsplash.com/600x900/?tech,street',
      type: 'Dabbal Project',
    },
    {
      name: 'Project Name',
      description:
        'this is description of the project we are going to implement do.',
      owner: 'Abduljebar Sani',
      ownerPhoto:
        'https://assets.codepen.io/460692/internal/avatars/users/default.png',
      ownerTitle: 'Command Executive Officer',
      date: new Date(),
      backUrl: 'https://source.unsplash.com/600x900/?tech,street',
      type: 'Dabbal Project',
    },
    {
      name: 'Project Name',
      description:
        'this is description of the project we are going to implement do.',
      owner: 'Abduljebar Sani',
      ownerPhoto:
        'https://assets.codepen.io/460692/internal/avatars/users/default.png',
      ownerTitle: 'Command Executive Officer',
      date: new Date(),
      backUrl: 'https://source.unsplash.com/600x900/?tech,street',
      type: 'Dabbal Project',
    },
    {
      name: 'Project Name',
      description:
        'this is description of the project we are going to implement do.',
      owner: 'Abduljebar Sani',
      ownerPhoto:
        'https://assets.codepen.io/460692/internal/avatars/users/default.png',
      ownerTitle: 'Command Executive Officer',
      date: new Date(),
      backUrl: 'https://source.unsplash.com/600x900/?tech,street',
      type: 'Dabbal Project',
    },
    {
      name: 'Project Name',
      description:
        'this is description of the project we are going to implement do.',
      owner: 'Abduljebar Sani',
      ownerPhoto:
        'https://assets.codepen.io/460692/internal/avatars/users/default.png',
      ownerTitle: 'Command Executive Officer',
      date: new Date(),
      backUrl: 'https://source.unsplash.com/600x900/?tech,street',
      type: 'Dabbal Project',
    },
  ];
}
