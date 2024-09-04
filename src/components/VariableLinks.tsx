import {Card} from "./Card";
import {VariableLinkNavigator} from "./VariableLinkNavigator";

export const VariableLinks = () => {
   return (
       <Card className={"flex-row flex gap-4"}>
          <VariableLinkNavigator
              label={"COI"}
              baseUrl={"https://navex.atlassian.net/browse/"}
              prefix={"COI-"}
              className={"bg-blue-700 hover:bg-blue-600 has-[:focus]:bg-blue-600"}
          />
           <VariableLinkNavigator
               label={"GITHUB"}
               prefix={"tnwinc/"}
               baseUrl={"https://github.com/"}
               className={"bg-green-700 hover:bg-green-600 has-[:focus]:bg-green-600"}/>
       </Card>
   )
}