import * as React from "react"
import {
  Card,
  CardHeader,
  Avatar,
  withStyles,
  Theme,
  createStyles,
  WithStyles,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  CardContent,
  Typography,
} from "@material-ui/core"
import BackIcon from "@material-ui/icons/ArrowBack"
import MelodyIcon from "@material-ui/icons/QueueMusic"
import BookIcon from "@material-ui/icons/LibraryBooks"
import PageIcon from "@material-ui/icons/Book"
import TypeIcon from "@material-ui/icons/FilterList"
import DescriptionIcon from "@material-ui/icons/Notes"
import { ButtonLink } from "./GatsbyLinkWrappers"
import { Song } from "../types/song"

const styles = (theme: Theme) =>
  createStyles({
    backButton: {
      marginBottom: theme.spacing.unit,
    },
    lyricsCard: {
      marginBottom: theme.spacing.unit,
    },
    leftIcon: {
      marginRight: theme.spacing.unit,
    },
  })

interface SongDetailsProps extends Song, WithStyles<typeof styles> {
  bookTitle: string
  bookId: string
}

const SongDetails: React.FunctionComponent<SongDetailsProps> = ({
  title,
  bookTitle,
  bookId,
  description,
  id,
  pre,
  lyrics,
  melody,
  page,
  type,
  classes,
}) => (
  <>
    <Card className={classes.lyricsCard}>
      <ButtonLink
        color="primary"
        size="large"
        className={classes.backButton}
        to={`/${bookId}`}
      >
        <BackIcon className={classes.leftIcon} />
        Back
      </ButtonLink>
      <CardHeader
        title={title}
        subheader={`${type}, ${bookTitle} (p. ${page})`}
      />
      <CardContent>
        {pre && (
          <Typography paragraph color="textSecondary">
            {pre}
          </Typography>
        )}
        <Typography paragraph>{lyrics}</Typography>
      </CardContent>
    </Card>
    <Card>
      <List subheader={<ListSubheader>Details</ListSubheader>} component="nav">
        {melody && (
          <ListItem>
            <Avatar>
              <MelodyIcon />
            </Avatar>
            <ListItemText primary="Melody" secondary={melody} />
          </ListItem>
        )}

        <ListItem>
          <Avatar>
            <BookIcon />
          </Avatar>
          <ListItemText primary="Songbook" secondary={bookTitle} />
        </ListItem>

        <ListItem>
          <Avatar>
            <PageIcon />
          </Avatar>
          <ListItemText primary="Page" secondary={page} />
        </ListItem>

        {type && (
          <ListItem>
            <Avatar>
              <TypeIcon />
            </Avatar>
            <ListItemText primary="Type" secondary={type} />
          </ListItem>
        )}

        {description && (
          <ListItem>
            <Avatar>
              <DescriptionIcon />
            </Avatar>
            <ListItemText primary="Description" secondary={description} />
          </ListItem>
        )}
      </List>
    </Card>
  </>
)

export default withStyles(styles)(SongDetails)
