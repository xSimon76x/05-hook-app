import { act, renderHook } from "@testing-library/react";
import { useForm } from "../hooks";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Simon",
    email: "simonbustamante@live.cl",
  };

  test("debe de regresar los valores pode defecto", () => {
    const {
      result: { current },
    } = renderHook(() => useForm(initialForm));

    console.log(current)

    expect(current).toEqual({
      ...initialForm,
      formState: {
        ...initialForm
      },
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function)
    });
    
  });


  test("debe de cambiar el nombre del formulario", () => {

    const newValue = 'Juan';

    const {
      result,
    } = renderHook(() => useForm(initialForm));

    const { onInputChange } = result.current;

    const obj = {
        target: {
            name: "name",
            value: newValue

        }
    }

    act(
        () => {
            onInputChange(obj)
        }
    );

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);

  });

  test("debe de resetear el formulario", () => {

    const newValue = 'Juan';

    const {
      result,
    } = renderHook(() => useForm(initialForm));

    const { onInputChange, onResetForm } = result.current;

    const obj = {
        target: {
            name: "name",
            value: newValue

        }
    }

    act(
        () => {
            onInputChange(obj);
            onResetForm(initialForm);
        }
    );

    

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);

  });


});
