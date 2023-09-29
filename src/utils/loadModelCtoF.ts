import * as tf from "@tensorflow/tfjs";

export const getModelCtoF = async () => {
  const model = await tf.loadLayersModel(
    "https://github.com/Loxess-crl/ia-proyects/blob/master/src/utils/loadModelCtoF.ts"
  );
  return model;
};
