import { FormGroup } from "@angular/forms";

export const fromForm = ( form: FormGroup, object: any ) => {
  return {...object, ...form.value };
}
