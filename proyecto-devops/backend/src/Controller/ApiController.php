<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ApiController extends AbstractController
{
    #[Route('/api', name: 'app_api')]
    public function index(): JsonResponse
    {
        return $this->json([
            'status' => 'success',
            'message' => '¡API de Dogs funcionando!'
        ]);
    }
}
