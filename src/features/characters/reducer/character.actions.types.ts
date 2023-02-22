export const charactersActions = {
  load: "characters@load",
  update: "characters@update",
};
export function loadCreator(
  loadCreator: any,
  arg1: (
    _state: import("immer/dist/internal").WritableDraft<
      import("../models/characters").CharacterStructure
    >[],
    { payload }: any
  ) => any
) {
  throw new Error("Function not implemented.");
}
