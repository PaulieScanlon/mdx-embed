import { components } from './components';

describe('components', () => {
  test('the components object contains all the current components', () => {
    expect(components.AirtableBase).toBeDefined();
    expect(components.AirtableForm).toBeDefined();
    expect(components.Buzzsprout).toBeDefined();
    expect(components.Cinnamon).toBeDefined();
    expect(components.CodePen).toBeDefined();
    expect(components.CodeSandbox).toBeDefined();
    expect(components.EggheadLesson).toBeDefined();
    expect(components.Flickr).toBeDefined();
    expect(components.Gist).toBeDefined();
    expect(components.Instagram).toBeDefined();
    expect(components.Lbry).toBeDefined();
    expect(components.Pin).toBeDefined();
    expect(components.PinterestBoard).toBeDefined();
    expect(components.PinterestFollowButton).toBeDefined();
    expect(components.SimplecastEpisode).toBeDefined();
    expect(components.SoundCloud).toBeDefined();
    expect(components.Spotify).toBeDefined();
    expect(components.Strava).toBeDefined();
    expect(components.TikTok).toBeDefined();
    expect(components.Twitch).toBeDefined();
    expect(components.Tweet).toBeDefined();
    expect(components.TwitterFollowButton).toBeDefined();
    expect(components.TwitterHashtagButton).toBeDefined();
    expect(components.TwitterList).toBeDefined();
    expect(components.TwitterMentionButton).toBeDefined();
    expect(components.TwitterTimeline).toBeDefined();
    expect(components.Vimeo).toBeDefined();
    expect(components.Wikipedia).toBeDefined();
    expect(components.Wistia).toBeDefined();
    expect(components.YouTube).toBeDefined();
  });
});
