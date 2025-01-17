// import { Dropdown, MenuProps, Tooltip } from 'antd'
import { Menu, MenuItem } from '@szhsin/react-menu'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

import React from 'react'
import AppSettings from '../../../models/AppSettings'
import PromptInputSettings from '../../../models/PromptInputSettings'
import ChevronDownIcon from '../../icons/ChevronDownIcon'
import InfoIcon from '../../icons/InfoIcon'
import MaxWidth from '../../UI/MaxWidth'
import styles from './triggerDropdown.module.css'

const TriggerDropdown = ({
  setInput,
  prompt,
  triggerArray
}: {
  setInput: (obj: object) => void
  prompt: string
  triggerArray: Array<string>
}) => {
  return (
    <MaxWidth className="max-w-[380px] relative">
      <div className="flex flex-row gap-2 items-center">
        <Menu
          menuButton={
            <a onClick={(e) => e.preventDefault()}>
              <span className="flex flex-row items-center cursor-pointer text-[#14B8A6]">
                Model trigger
                <ChevronDownIcon />
              </span>
            </a>
          }
          menuClassName={styles['styled-dropdown']}
          offsetX={8}
          offsetY={4}
        >
          {triggerArray.map((trigger: string, i: number) => {
            return (
              <MenuItem
                className={styles['menu-item']}
                key={`trigger_word_${i}`}
                onClick={(e: any) => {
                  const updatePrompt = `${e.value} ` + prompt + ` `
                  if (AppSettings.get('savePromptOnCreate')) {
                    PromptInputSettings.set('prompt', updatePrompt)
                  }

                  setInput({
                    prompt: updatePrompt
                  })
                }}
                value={trigger}
              >
                {trigger}
              </MenuItem>
            )
          })}
        </Menu>
        <a id="trigger-dropdown-tooltip">
          <InfoIcon stroke="white" fill="#14B8A6" />
        </a>
        <Tooltip
          anchorSelect="#trigger-dropdown-tooltip"
          className={styles['tooltip-wrapper']}
        >
          <div className={styles.tooltip}>
            This model requires the use of certain trigger words in order to
            fully utilize its abilities. Click here to add trigger words into
            your prompt.
          </div>
        </Tooltip>
      </div>
    </MaxWidth>
  )
}

export default TriggerDropdown
