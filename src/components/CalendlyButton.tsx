'use client'

import { useEffect, useState } from 'react'
import { PopupModal } from 'react-calendly'
import { Button, type ButtonProps } from '@/components/Button'

type ButtonElementProps = Extract<
  ButtonProps,
  React.ComponentPropsWithoutRef<'button'> & { href?: undefined }
>

type CalendlyButtonProps = Omit<ButtonElementProps, 'href'> & {
  url: string
}

export function CalendlyButton({
  url,
  children,
  ...buttonProps
}: CalendlyButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setRootElement(document.getElementById('__next') ?? document.body)
  }, [])

  return (
    <>
      <Button type="primary"  {...buttonProps} onClick={() => setIsOpen(true)}>
        {children}
      </Button>
      {rootElement ? (
        <PopupModal
          url={url}
          open={isOpen}
          onModalClose={() => setIsOpen(false)}
          rootElement={rootElement}
        />
      ) : null}
    </>
  )
}


