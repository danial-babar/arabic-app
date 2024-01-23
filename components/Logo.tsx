import Image from 'next/image';
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
    return (
        <div className="text-center py-4">
          <Image src={'/Images/logo.png'} alt="Logo" className="mx-auto" width={100} height={100}/>
        </div>
      );
}

export default Logo