<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class DogController extends AbstractController
{
    #[Route('/api/dogs', name: 'api_dogs', methods: ['GET', 'POST'])]
    public function handleDogs(Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('POST')) {
                $data = json_decode($request->getContent(), true, 512, JSON_THROW_ON_ERROR);
                
                if (!isset($data['name'])) {
                    throw new \InvalidArgumentException('Missing required field: name');
                }

                return $this->json([
                    'status' => 'success',
                    'message' => 'Perro '.$data['name'].' creado!',
                    'data' => $data
                ], 201);
            }

            return $this->json([
                'dogs' => [
                    ['id' => 1, 'name' => 'Rex'],
                    ['id' => 2, 'name' => 'Buddy']
                ]
            ]);

        } catch (\Exception $e) {
            return $this->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 400);
        }
    }
}
