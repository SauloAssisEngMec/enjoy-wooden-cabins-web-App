import supabase from "./supabase";

export const getCabins = async () => {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("getCabins Error");
  }

  return data;
};

export const createCabin = async (cabinData) => {
  const { data, error } = await supabase
    .from("cabins")
    .insert([cabinData])
    .select();

  if (error) {
    console.error(error);
    throw new Error("crateCabin Error");
  }

  return data;
};

export const deleteCabin = async (id) => {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("deleteCabin Error");
  }

  return data;
};
