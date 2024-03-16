import {
  Body1,
  Button,
  Caption1,
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
  Field,
  FieldProps,
  Input,
} from '@fluentui/react-components'
import { ArrowReplyRegular, ShareRegular } from '@fluentui/react-icons'

function App(props: Partial<FieldProps>) {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <Card>
        <CardHeader
          header={
            <Body1>
              <b>Elvia Atkins</b> mentioned you
            </Body1>
          }
          description={<Caption1>5h ago · About us - Overview</Caption1>}
        />

        <CardPreview>
          <Field
            label='Example field'
            validationState='success'
            validationMessage='This is a success message.'
            {...props}
          >
            <Input />
          </Field>
        </CardPreview>

        <CardFooter>
          <Button icon={<ArrowReplyRegular fontSize={16} />}>Reply</Button>
          <Button icon={<ShareRegular fontSize={16} />}>Share</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default App
