import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent {


  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      props: {
        label: 'Name',
        placeholder: 'Enter name',
        type: 'text',
        required: true,
      }
    },
    {
      key: 'description',
      type: 'input',
      props: {
        label: 'Description',
        placeholder: 'Enter Description',
        type: 'text',
        required: true,
      }
    },
    {
      key: 'owner',
      type: 'input',
      props: {
        label: 'owner',
        placeholder: 'Enter owner',
        type: 'text',
        required: true,
      }
    }

  ];

  onSubmit(model: any) {
    if (this.form.valid) {
      console.log("model : ", model);
    } else {
      console.log("invalid form submition");
    }
  }
}
