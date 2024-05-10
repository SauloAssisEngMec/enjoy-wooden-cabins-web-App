
import Input from "../../components/Input";
import Form from "../../components/Form";
import Button from "../../components/Button";
import FileInput from "../../components/FileInput";
import Textarea from "../../components/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "../../components/FormRow";

// const FormRow = styled.div`
//   display: grid;
//   align-items: center;
//   grid-template-columns: 24rem 1fr 1.2fr;
//   gap: 2.4rem;

//   padding: 1.2rem 0;

//   &:first-child {
//     padding-top: 0;
//   }

//   &:last-child {
//     padding-bottom: 0;
//   }

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }

//   &:has(button) {
//     display: flex;
//     justify-content: flex-end;
//     gap: 1.2rem;
//   }
// `;

// const Label = styled.label`
//   font-weight: 500;
// `;

// const Error = styled.span`
//   font-size: 1.4rem;
//   color: var(--color-red-700);
// `;

function CreateCabinForm() {

  const {register, handleSubmit, reset, getValues, formState}= useForm()
  const {errors} = formState
  const queryClient = useQueryClient()

  const { mutate , isLoading: isCreatingCabin} = useMutation({

    mutationFn: createCabin,
    onSuccess: () => {toast.success("New Cabin created");
    queryClient.invalidateQueries({queryKey: ["cabins"]})
    reset()
  },
  onError: err => toast.error(err.message)
  })

 

  function onSubmit(data) {
   mutate(data)

  }

  function onError(error) {
    // console.log(error)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
   
      <FormRow label="Cabin name" error={errors?.name?.message}>
      <Input type="text" id="name"  {...register("name", {
          required: "this field is required"
        })}/>
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        
        <Input type="number" id="maxCapacity" {...register("maxCapacity", {
          required: "this field is required",
          min: {
            value: 1,
            message: "The minimal is 1"
          }
        })} />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
      
        <Input type="number" id="regularPrice" disabled={isCreatingCabin} {...register("regularPrice", {
          required: "this field is required",
          min: {
            value: 1,
            message: "The minimal is 1"
          }
        })}/>
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        
        <Input type="number" id="discount" disabled={isCreatingCabin} defaultValue={0}  {...register("discount", {
          required: "this field is required",
          validate: (value) => value <= getValues().regularPrice || "Discount should be less than regular price"
        })}/>
      </FormRow>

      <FormRow label="Description for website" error={errors?.description?.message}>
       
        <Textarea type="number" id="description" disabled={isCreatingCabin} defaultValue="" {...register("description", {
          required: "this field is required"
        })}/>
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message}>
      
        <FileInput id="image" disabled={isCreatingCabin} accept="image/*" />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreatingCabin}>Edit cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
