type ComponentsAux<T> = Record<string, TailwindClasses>[]
| Record<string, T>[]
| React.DetailedHTMLProps<React.HTMLAttributes<T>, T>[]
| React.ReactNode[]

type TailwindClasses = boolean
