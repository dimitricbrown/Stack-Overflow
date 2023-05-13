import Card from 'react-bootstrap/Card';

function RightCard() {
  return (
    <>
      <Card className="RightCard" style={{ width: '18rem', backgroundColor: 'warning', marginTop: '50px' }}>
        <Card.Header>The Overflow Blog</Card.Header>
        <Card.Body>
          <Card.Link href="https://stackoverflow.blog/2023/05/10/a-conversation-with-the-folks-building-googles-ai-models-and-i-o-releases/?cb=1&_ga=2.110504006.2108197581.1683582046-1277455778.1673521254">
            A conversation with the folks building Google’s AI models and I/O releases
          </Card.Link>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the cards content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="RightCard" style={{ width: '18rem' }}>
        <Card.Header>Featured on Meta</Card.Header>
        <Card.Body>
          <Card.Text>
            New blog post from our CEO Prashanth: Community is the future of AI
            We are updating our Code of Conduct and we would like your feedback
            Temporary policy: ChatGPT is banned
            The [connect] tag is being burninated
            Take the 2023 Developer Survey
            Stack Overflow will be testing a title-drafting assistant, and we’d like your...
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card className="RightCard1" border="success" style={{ width: '18rem' }}>
        <Card.Header>Custom Filters</Card.Header>
        <Card.Body>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
            <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
            <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
          </svg>
          <b />
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bookmark-heart-fill" viewBox="0 0 16 16">
            <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
          </svg>
        </Card.Body>
      </Card>
      <br />

      <Card className="RightCard1" style={{ width: '18rem' }}>
        <Card.Header>Collectives</Card.Header>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the cards content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default RightCard;
