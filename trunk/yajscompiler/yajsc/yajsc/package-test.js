package yajsc {
    public class TestClassLib extends LocalScope
    {
        function TestClassLib(){
            print('Construct TestClassLib');
            try{
                globals['testVar']++;
                print(globals['testVar']);
            }catch(e){
                globals['testVar'] = 0;
                print(globals['testVar']);
            }
            globals['test321'] = 'test123';
        }
        public function TestFunc()
        {
            print('Public TestClassLib invoke');
            try{
                globals['testVar']++;
                print(globals['testVar']);
            }catch(e){
                globals['testVar'] = 0;
                print(globals['testVar']);
            }
            globals['test321'] = 'test123';
            return globals['test321'];
        }
    }
    public class TestClassLib2 extends LocalScope
    {
        function TestClassLib2(){
            print('Construct TestClassLib2');
            try{
                globals['testVar']++;
                print(globals['testVar']);
            }catch(e){
                globals['testVar'] = 0;
                print(globals['testVar']);
            }
            globals['test321'] = 'test123';
        }
        public function TestFunc(){
            print('Public TestClassLib2 invoke');
            try{
                globals['testVar']++;
                print(globals['testVar']);
            }catch(e){
                globals['testVar'] = 0;
                print(globals['testVar']);
            }
            globals['test321'] = 'test123';
            return globals['test321'];
        }
    }
}