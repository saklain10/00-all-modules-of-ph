/**
 *Form data getting method:
 1.e.target.[name of the input field].value
 2.useForm Action and formData in the action handler. formData.grt('num of the input field')
 3. controlled component. one per each field use state on change of the field. useful to dynamically handle error
 3. handle all controlled field on one state object
 const [formData, setFormData] = useState({
 name:'',
 password:'',
 phone:''
 })
4.uncontrolled using useRef

5.HookForm
 */