import { createMuiTheme } from "@material-ui/core/styles"

export default createMuiTheme({
  overrides: {
    MuiTypography: {
      root: {
        color: "white",
        fontSize: "20px"
      }
    },
    MuiButton: {
      root: { 
        fontSize: '20px',
        backgroundColor: "gainsboro"
      }
    },
    MuiGrid: {
      root: {
        backgroundColor: "blue"
      }
    },
    MuiCard: {
      root: {
        background: "transparent"
      }
    },
    MuiInputBase: {
      input: {
        color: "#FEFEFE",
        borderColor: "#FEFEFE",
      },
    },
    MuiInputLabel: {
      root: {
        color: "#ccc",
      }
    }
  }
})
