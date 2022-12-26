const fontFamily = {
  medium: "OpenSans-SemiBold",
  regular: "OpenSans-Regular"
}

const fonts = {
  h1: (weight = "regular") => ({
    fontSize: 32,
    fontFamily: fontFamily[weight],
  }),
  h2: (weight = "regular") => ({
    fontSize: 20,
    fontFamily: fontFamily[weight],
  }),
  h3: (weight = "regular") => ({
    fontSize: 16,
    fontFamily: fontFamily[weight],
  }),
  h4: (weight = "regular") => ({
    fontSize: 14,
    fontFamily: fontFamily[weight],
  }),
  h5: (weight = "regular") => ({
    fontSize: 10,
    fontFamily: fontFamily[weight],
  }),
  h6: (weight = "regular") => ({
    fontSize: 8,
    fontFamily: fontFamily[weight],
  }),
  p1: (weight = "regular") => ({
    fontSize: 15,
    fontFamily: fontFamily[weight],
  }),
  p2: (weight = "regular") => ({
    fontSize: 13,
    fontFamily: fontFamily[weight],
  })
}

export default fonts