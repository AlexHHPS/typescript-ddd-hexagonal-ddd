

const useCaseExample: UseCaseExample = new UseCaseExample(new RepositoryExample());

class ControllerExample {


    public getResource = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = await useCaseExample.execute();
            return res.status(200).json(result);
        } catch (error) {
            // log error
        }
    }
}