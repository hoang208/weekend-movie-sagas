import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    TextField,
    Typography,
  } from "@mui/material";
  
  export default function Edit() {

    return (
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Container maxWidth="sm" sx={{ p: 3 }}>
        <Typography sx={{ m: 2}} variant="h4" align="center" component="div">
            Add a movie!
          </Typography>
          <Grid container spacing={2} sx={{border:1, borderRadius: '16px' }}>
            <Grid container item xs={6} direction="column">
              <TextField
                required
                id="outlined-required"
                label="Movie Title"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-required"
                label="Movie Poster Link"
                variant="outlined"
              />
            </Grid>
            <Grid container item xs={6} direction="column">
              <TextField
                required
                id="description"
                label="Movie Description"
                multiline
                rows={4}
                variant="outlined"
              />
            </Grid>
            <Grid container item xs={6} direction="column">
              <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormLabel component="legend">Assign genres</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox name="Adventure" />}
                    label="Adventure"
                  />
                  <FormControlLabel
                    control={<Checkbox name="Animated" />}
                    label="Animated"
                  />
                  <FormControlLabel
                    control={<Checkbox name="Biographical" />}
                    label="Biographical"
                  />
                  <FormControlLabel
                    control={<Checkbox name="Comedy" />}
                    label="Comedy"
                  />
                  <FormControlLabel
                    control={<Checkbox name="Disaster" />}
                    label="Disaster"
                  />
                  <FormControlLabel
                    control={<Checkbox name="Drama" />}
                    label="Drama"
                  />
                  <FormControlLabel
                    control={<Checkbox name="Epic" />}
                    label="Epic"
                  />
                  <FormControlLabel
                    control={<Checkbox name="Fantasy" />}
                    label="Fantasy"
                  />
                  <FormControlLabel
                    control={<Checkbox name="Musical" />}
                    label="Musical"
                  />
                  <FormControlLabel
                    control={<Checkbox name="Romantic" />}
                    label="Romantic"
                  />
                  <FormControlLabel
                    control={<Checkbox name="Science Fiction" />}
                    label="Science Fiction"
                  />
                  <FormControlLabel
                    control={<Checkbox name="Space-Opera" />}
                    label="Space-Opera"
                  />
                   <FormControlLabel
                    control={<Checkbox name="Superhero" />}
                    label="Superhero"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid container item xs={6} direction="column">
              <Button
                type="submit"
                variant="outlined"
                size="large"
                color="success"
                sx={{ m: 2 }}
              >
                Add
              </Button>
              <Button
                type="submit"
                variant="outlined"
                size="large"
                color="error"
                sx={{ m: 2 }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
  
     
        </Container>
      </Box>
    );
  }
  