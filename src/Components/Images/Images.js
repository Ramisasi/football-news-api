
function importAll(resolve) {
  return resolve.keys().map(resolve);
}
export const getDirectory = (directoryName) => {
  if (directoryName == 'Slider') {
    return importAll(require.context('../../image/Slider', false, /\.(png|jpe?g|svg)$/));
  }
}


