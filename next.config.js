module.exports = {
  reactStrictMode: true,
  env: {
    CLOUDINARY_URL:
      "{url}",
    CLOUDINARY_CLOUDNAME: "{cloudname}",
    MONGO_URI:
      "mongodb+srv://{username}:{password}@cluster0.z9i4w.mongodb.net/{docname}?retryWrites=true&w=majority",
    PORT: 3004,
  }, //url for image upload to cloudinary. First copy "API base url" from Cloudinary. Then paste it here.
};
