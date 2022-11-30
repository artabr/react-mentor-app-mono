module.exports = (config, context) => {
  // Extract output path from context
  const {
    options: { outputPath, filename },
  } = context;

  config.output = {
    filename: filename,
    path: outputPath
  }
  return config;
};
