import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  Divider,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type CharacterSheet = {
  name: string;
  player: string;
  chronicle: string;
  concept: string;
  mask: string;
  dirge: string;
  clan: string;
  covenant: string;
  bloodline: string;
  attributes: Record<string, number>;
  humanity: number;
  willpower: number;
  vitae: number;
  meritsText: string;
  disciplinesText: string;
  skillsText: string;
  history: string;
  goals: string;
  description: string;
};

const capitalizeFirstLetter = (value: string) => {
  return String(value).charAt(0).toUpperCase() + String(value).slice(1);
}

export default function CharacterSheetForm() {
  const navigate = useNavigate()
  const { control, handleSubmit, register } = useForm<CharacterSheet>({
    defaultValues: {
      attributes: {
        intelligence: 1,
        wits: 1,
        resolve: 1,
        strength: 1,
        dexterity: 1,
        stamina: 1,
        presence: 1,
        manipulation: 1,
        composure: 1,
      },
      humanity: 7,
      willpower: 5,
      vitae: 10,
    },
  });

  const [data, setData] = useState<CharacterSheet | null>(null);

  const onSubmit = (formData: CharacterSheet) => {
    const currentChars = localStorage?.getItem("characters") ?? "[]"
    const parsedCurrentChars = JSON.parse(currentChars)
    setData(formData);
    console.log("Character Sheet:", formData);
    const newChars = [...parsedCurrentChars, formData]
    localStorage.setItem("characters", JSON.stringify(newChars))
    navigate('/')
  };

  return (
    <Box sx={{ p: 4, maxWidth: 1000, mx: "auto", marginTop: 10 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
        Vampire: The Requiem 2e — Character Sheet
      </Typography>

      <Paper sx={{ p: 3, mt: 2 }} elevation={3}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Basic Info */}
          <Typography variant="h6" gutterBottom>Basic Information</Typography>
          <Grid container spacing={2}>
            {["name", "player", "chronicle", "concept", "mask", "dirge", "clan", "bloodline", "covenant"].map((field) => (
              <Grid key={field}>
                <Controller
                  name={field as keyof CharacterSheet}
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} label={capitalizeFirstLetter(field?.name)} fullWidth />
                  )}
                />
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* Attributes */}
          <Typography variant="h6" gutterBottom>Attributes</Typography>
          <Grid container spacing={2}>
            {Object.keys({
              intelligence: 1,
              wits: 1,
              resolve: 1,
              strength: 1,
              dexterity: 1,
              stamina: 1,
              presence: 1,
              manipulation: 1,
              composure: 1,
            }).map((attr) => (
              <Grid key={attr}>
                <Controller
                  name={`attributes.${attr}` as const}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="number"
                      label={attr[0].toUpperCase() + attr.slice(1)}
                      inputProps={{ min: 0, max: 5 }}
                      fullWidth
                    />
                  )}
                />
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* Skills */}
          <Typography variant="h6" gutterBottom>Skills</Typography>
          <TextField
            {...register("skillsText")}
            multiline
            rows={3}
            placeholder="List skills and dots..."
            fullWidth
          />

          <Divider sx={{ my: 3 }} />

          {/* Merits & Disciplines */}
          <Grid container spacing={2}>
            <Grid>
              <Typography variant="h6" gutterBottom>Merits</Typography>
              <TextField {...register("meritsText")} multiline rows={3} fullWidth />
            </Grid>
            <Grid>
              <Typography variant="h6" gutterBottom>Disciplines</Typography>
              <TextField {...register("disciplinesText")} multiline rows={3} fullWidth />
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* Traits */}
          <Typography variant="h6" gutterBottom>Core Traits</Typography>
          <Grid container spacing={2}>
            {["humanity", "willpower", "vitae"].map((trait) => (
              <Grid key={trait}>
                <Controller
                  name={trait as keyof CharacterSheet}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="number"
                      label={trait[0].toUpperCase() + trait.slice(1)}
                      inputProps={{ min: 0 }}
                      fullWidth
                    />
                  )}
                />
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* Story */}
          <Typography variant="h6" gutterBottom>Background & Story</Typography>
          <TextField {...register("history")} label="History" multiline rows={3} fullWidth sx={{ mb: 2 }} />
          <TextField {...register("goals")} label="Goals" multiline rows={2} fullWidth sx={{ mb: 2 }} />
          <TextField {...register("description")} label="Description" multiline rows={2} fullWidth />

          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Button variant="contained" color="primary" type="submit">
              Save Character
            </Button>
          </Box>
        </form>
      </Paper>

      {data && (
        <Paper sx={{ mt: 4, p: 3, backgroundColor: "#f9f9f9" }}>
          <Typography variant="h6" gutterBottom>Character JSON Output</Typography>
          <pre style={{ overflowX: "auto" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </Paper>
      )}
    </Box>
  );
}
