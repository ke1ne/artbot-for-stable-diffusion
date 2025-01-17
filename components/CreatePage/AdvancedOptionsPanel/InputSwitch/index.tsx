import { ReactElement } from 'react'
import ReactSwitch from 'react-switch'
import { formatStringRemoveSpaces } from '../../../../utils/htmlUtils'
import Section from '../../../UI/Section'
import SubSectionTitle from '../../../UI/SubSectionTitle'
import TextTooltipRow from '../../../UI/TextTooltipRow'
import Tooltip from '../../../UI/Tooltip'

interface Props {
  checked: boolean
  disabled?: boolean
  handleSwitchToggle: () => void
  label: string
  moreInfoLink?: ReactElement | null
  tooltip?: string
}

const InputSwitch = ({
  checked = false,
  disabled = false,
  handleSwitchToggle = () => {},
  label,
  moreInfoLink = null,
  tooltip
}: Props) => {
  const tooltipId = formatStringRemoveSpaces(label)

  return (
    <Section>
      <SubSectionTitle>
        <>
          <TextTooltipRow>
            {label}
            {tooltip && <Tooltip tooltipId={tooltipId}>{tooltip}</Tooltip>}
          </TextTooltipRow>
          {moreInfoLink && (
            <div className="mt-1 mb-2 text-xs">{moreInfoLink}</div>
          )}
        </>
      </SubSectionTitle>
      <ReactSwitch
        disabled={disabled}
        onChange={handleSwitchToggle}
        checked={checked ? true : false}
      />
    </Section>
  )
}

export default InputSwitch
