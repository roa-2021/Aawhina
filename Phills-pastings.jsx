import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  root: {
    width: 200,
    "& .MuiOutlinedInput-input": {
      color: "#91A6FF"
    },
    "& .MuiInputLabel-root": {
      color: "#91A6FF"
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#91A6FF"
    },
  }
});

-------------------------------------
function MakeProfile (props) {
  const { dispatch } = props
  const { user } = useAuth0()
  const classes = useStyles()             
  
  -----------------------------------
        
 {/* <InputLabel>Suburb</InputLabel> */}  
            <TextField                    
              label='Suburb'
              value={newSuburb}
              className={classes.root}    
              onChange={handleSuburb}     
              sx={{ width: '20ch' }}
              select>                     
                
  -----------------------------------
